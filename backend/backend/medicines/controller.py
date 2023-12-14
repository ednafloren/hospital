from flask import jsonify, request, Blueprint
from backend.medicines.model import Medicine
from backend.db import db
from datetime import datetime, timedelta
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_cors import CORS
from flask import current_app as app
import logging

medicines = Blueprint('medicines', __name__, url_prefix='/medicines')
CORS(medicines, supports_credentials=True)
CORS(medicines, resources={r"/medicines/create": {"origins": "*"}})
# Getting all medicines
@medicines.route("/")
def get_all_medicines():
    medicines = Medicine.query.all()
    return jsonify({
        "success": True,
        "data": medicines,
        "total": len(medicines)
    }), 200



    # counting

@medicines.route("/total", methods=["GET"])
def get_total_medicines():
    try:
        total_medicines = Medicine.query.count()

        return jsonify({
            "success": True,
            "total": total_medicines
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

# Creating medicines
# ...

<<<<<<< HEAD
=======
@medicines.route('/create', methods=['POST'])
@jwt_required()
def create_new_medicine():
    data = request.get_json()

    # Check if 'stock' and 'expiry_date' fields are present in the data
    if 'stock' not in data:
        return jsonify({'error': "Stock is required"}), 400
    if 'expiry_date' not in data:
        return jsonify({'error': "Expiry date is required"}), 400

    # Extract data from the request
    name = data['name']
    unit_price = data['unit_price']
    image = data['image']
    stock = data['stock']
    expiry_date = data['expiry_date']
    medicine_category_id = data['medicine_category_id']
    created_by = get_jwt_identity()

    # Validations...
    
    def is_near_expiry(expiry_date, days_before=2):
        """
        Check if the medicine is nearing expiry.

        Parameters:
        - expiry_date (str): Expiry date of the medicine in the format '%Y-%m-%d'.
        - days_before (int): Number of days before expiry to consider as nearing expiry.

        Returns:
        - bool: True if nearing expiry, False otherwise.
        """
        expiry_datetime = datetime.strptime(expiry_date, "%Y-%m-%d")
        current_datetime = datetime.now()
        days_remaining = (expiry_datetime - current_datetime).days
        return 0 < days_remaining <= days_before

    # Validation for near expiry
    if is_near_expiry(expiry_date):
        return jsonify({'error': "Medicine is nearing expiry"}), 400
    if not name:
        return jsonify({'error': "Medicine name is required"})
    if not unit_price:
        return jsonify({'error': "The cost of Medicine per unit is required"})
    if not image:
        return jsonify({'error': "Medicine image is required"})
    if not stock:
        return jsonify({'error': "The quantity in stock is required"})
    if not medicine_category_id:
        return jsonify({'error': "The medicine category name is required"})

         
   

    if Medicine.query.filter_by(name=name).first() is not None and Medicine.query.filter_by(created_by=created_by).first():
        return jsonify({'error': "This Medicine  already exsists"}), 409 
    

    medicines = Medicine(
        name=name,
        created_by=created_by,
        unit_price=unit_price,
        image=image,
        stock=stock,
        expiry_date=expiry_date,
        medicine_category_id=medicine_category_id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    # Inserting values
    db.session.add(medicines)
    db.session.commit()
    
    return jsonify({'message': 'New Medical supply item created successfully', 'data': [medicines.id, medicines.name, medicines.created_by, medicines.created_at, medicines.expiry_date, medicines.updated_at, medicines.unit_price, medicines.image, medicines.stock, medicines.medicine_category_id]}), 201

# Other routes...
>>>>>>> b59e50532c9a067bb7b9ab612882ced7a1fe2dc8
@medicines.route('/get/<int:id>', methods=['GET'])
def get_medicines(id):
    medicine = Medicine.query.get(id)

    results = {
        "id": medicine.id,
        "name": medicine.name,
        "unit_price": medicine.unit_price,
        "image": medicine.image,
        "stock": medicine.stock,
        "expiry_date": medicine.expiry_date,
        "medicine_category_id": medicine.medicine_category_id,
        "created_by": medicine.created_by,
        "created_at": medicine.created_at
    }

    return jsonify({"Success": True, "Medicine": results, "Message": "Medicine item details retrieved"})

@medicines.route('/update/<id>', methods=['PUT'])
def update_medicalsupply(id):
    medicine = Medicine.query.get_or_404(id)

    medicine.name = request.json['name']
    medicine.medicine_category_id=request.json['medicine_category_id']
    medicine.unit_price = request.json['unit_price']
    medicine.stock = request.json['stock']
        # Update expiry_date if it's provided in the JSON payload
    if 'expiry_date' in request.json:
        medicine.expiry_date = request.json['expiry_date']
    medicine.updated_at = datetime.utcnow()


    db.session.add(medicine)
    db.session.commit()

    return jsonify({"message": "This Medicine was updated successfully"})

@medicines.route('/create', methods=['POST'])
@jwt_required()
def create_new_medicine():
    data = request.get_json()

    required_fields = ['name', 'unit_price', 'image', 'stock', 'expiry_date', 'medicine_category_id']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f"{field} is required"}), 400

    name = data['name']
    unit_price = data['unit_price']
    image = data['image']
    stock = data['stock']
    if 'expiry_date' in request.json:
        expiry_date = data['expiry_date']
    

    medicine_category_id = data['medicine_category_id']
    created_by = get_jwt_identity()

    # try:
    #     expiry_datetime = datetime.strptime(expiry_date, "%Y-%m-%d")
    #     current_datetime = datetime.now()
    #     if expiry_datetime <= current_datetime:
    #         return jsonify({'error': "Expiry date must be in the future"}), 400
    # except ValueError:
    #     return jsonify({'error': "Invalid expiry date format, use YYYY-MM-DD"}), 400

    new_medicine = Medicine(
        name=name,
        unit_price=unit_price,
        image=image,
        stock=stock,
        expiry_date=expiry_date,
        medicine_category_id=medicine_category_id,
        created_by=created_by,
        created_at=datetime.now()
    )

    db.session.add(new_medicine)
    db.session.commit()

    result = {
        "id": new_medicine.id,
        "name": new_medicine.name,
        "unit_price": new_medicine.unit_price,
        "image": new_medicine.image,
        "stock": new_medicine.stock,
        "expiry_date": new_medicine.expiry_date,
        "medicine_category_id": new_medicine.medicine_category_id,
        "created_by": new_medicine.created_by,
        "created_at": new_medicine.created_at
    }

    return jsonify({'message': 'New medicine created successfully', 'data': result}), 200

@medicines.route('/delete/<id>', methods=['DELETE'])
def delete_medicine(id):
    medicine = Medicine.query.get(id)
    if medicine:
        for dispensed_stocks in medicine.dispensed_stocks:
            db.session.delete(dispensed_stocks)
        db.session.delete(medicine)
        db.session.commit()
        return jsonify({"message": "Medicine deleted successfully."})
    return jsonify({"error": "This Medicine does not exist"}), 404

def get_near_expiry_medicines():
<<<<<<< HEAD
    days_before_expiry = 7
=======
    # Get medicines nearing expiry (e.g., within the next 2 days)
    days_before_expiry = 2  # Change this to 2
>>>>>>> b59e50532c9a067bb7b9ab612882ced7a1fe2dc8
    current_date = datetime.now()
    expiry_threshold = current_date + timedelta(days=days_before_expiry)

    near_expiry_medicines = Medicine.query.filter(
        Medicine.expiry_date > current_date,
        Medicine.expiry_date <= expiry_threshold
    ).all()

    near_expiry_data = [{
        "id": medicine.id,
        "name": medicine.name,
        "expiry_date": medicine.expiry_date,
    } for medicine in near_expiry_medicines]

    return jsonify({
        "success": True,
        "data": near_expiry_data,
        "total": len(near_expiry_medicines),
        "message": "Medicines nearing expiry retrieved successfully",
    }), 200
@medicines.route('/expired', methods=['GET'])
def get_expired_medicines():
    current_date = datetime.now()

    expired_medicines = Medicine.query.filter(
        Medicine.expiry_date <= current_date
    ).all()

    expired_data = [{
        "id": medicine.id,
        "name": medicine.name,
        "expiry_date": medicine.expiry_date,
    } for medicine in expired_medicines]

    return jsonify({
        "success": True,
        "data": expired_data,
        "total": len(expired_medicines),
        "message": "Fully expired medicines retrieved successfully",
    }), 200

@medicines.route('/low-stock', methods=['GET'])
def get_low_stock_medicines():
    low_stock_threshold = 2

    low_stock_medicines = Medicine.query.filter(
        Medicine.stock <= low_stock_threshold
    ).all()

    low_stock_data = [{
        "id": medicine.id,
        "name": medicine.name,
        "stock": medicine.stock,
    } for medicine in low_stock_medicines]

    return jsonify({
        "success": True,
        "data": low_stock_data,
        "total": len(low_stock_medicines),
        "message": "Medicines with low stock retrieved successfully",
    }), 200



# JKSKFDF
def fetch_notification_counts():
    # Fetch counts from your existing routes
    with app.test_client() as client:
        near_expiry_response = client.get('/near-expiry')
        expired_response = client.get('/expired')
        low_stock_response = client.get('/low-stock')

    print("Near Expiry Response:", near_expiry_response.json)
    print("Expired Response:", expired_response.json)
    print("Low Stock Response:", low_stock_response.json)

    # Function to extract total count from response
    def extract_total(response):
        try:
            # Ensure the response content type is JSON
            if response.content_type == 'application/json':
                return response.json.get('total', 0)
            else:
                logging.warning(f"Unexpected content type: {response.content_type}")
                return 0
        except (AttributeError, KeyError, TypeError) as e:
            logging.error(f"Error extracting total count: {e}")
            return 0

    # Extract counts from responses
    near_expiry_count = extract_total(near_expiry_response)
    expired_count = extract_total(expired_response)
    low_stock_count = extract_total(low_stock_response)

    return {
        "expiredMedicineCount": expired_count,
        "lowStockCount": low_stock_count,
        "nearExpiryCount": near_expiry_count
    }


@medicines.route('/notification-counts')
def get_notification_counts():
    notification_counts = fetch_notification_counts()
    return jsonify(notification_counts)