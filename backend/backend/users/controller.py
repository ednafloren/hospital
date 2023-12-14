#register a new user
from flask import  jsonify, request, Blueprint
from backend.users.model import User
from flask_jwt_extended import create_access_token
from backend.db import db
from datetime import datetime
from flask_jwt_extended import jwt_required
from flask_cors import CORS
from flask_login import login_required, current_user
from flask_jwt_extended import JWTManager,jwt_required, get_jwt_identity, create_access_token, unset_jwt_cookies

from werkzeug.security import generate_password_hash,check_password_hash


users = Blueprint('users', __name__, url_prefix='/users')

# /dfvghjkl;




# app.config['JWT_SECRET_KEY'] = '1234'
# jwt = JWTManager(app)

@users.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    user = User.query.filter_by(email=email).first()

    if not email or not password:
        return jsonify({"message": "Both email and password are required"}), 400

    if user:
        password_hash = check_password_hash(user.password, password)
        if password_hash:
            access_token = create_access_token(identity=user.id)
            return jsonify({"message": "User logged in successfully", "access_token": access_token, "user": user}), 200
        else:
            return jsonify({"message": "Invalid password"}), 400
    else:
        return jsonify({"message": "Email address doesn't exist"}), 400

@users.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    user_identity = get_jwt_identity()
    return jsonify(logged_in_as=user_identity), 200






CORS(users, supports_credentials=True)

@users.route('/refresh', methods=['POST'])
@jwt_required()
def refresh():
    current_user = get_jwt_identity()
    new_access_token = create_access_token(identity=current_user)
    return jsonify(access_token=new_access_token), 200


#get all users
@users.route("/")
def all_users():
    users= User.query.all()
    return jsonify({
            "success":True,
            "data":users,
            "total":len(users)
        }),200

#user registration
@jwt_required()
@users.route('/register',methods=['POST'])
def create_user():
    data = request.get_json()
    
    if request.method == "POST":
          
      name = data['name']
      email = data['email']
      contact = data['contact']
      user_type = 'Manager'
      password = data['password']


  
      #validations
      if not contact:
              return jsonify({'error':"Contact is required"}),400
      elif contact==10:
          return jsonify({'error':"Contact must be 10 numbers"}),400
      
      if not name:
              return jsonify({'error':"Name is required"}),400
       
      if not email:
              return jsonify({'error':"Email is required"}),400
      
      if User.query.filter_by(name=name).first() is not None:
        return jsonify({'error': "This user  already exsist, so just login"}), 409 
      

      if len(password) < 6:
            return jsonify({'error': "Password is too short, it must be 6 characters and above"}), 400


      if User.query.filter_by(email=email).first() is not None:
        return jsonify({'error': "Email is already in use"}), 409 

    
      if User.query.filter_by(contact=contact).first() is not None:
        return jsonify({'error': "Phone number is already in use"}),409
      




      #creating a hashed password in the database
      hashed_password = generate_password_hash(password)
      new_user = User(name=name,email=email,contact=contact,user_type=user_type,password=hashed_password,created_at=datetime.now(),updated_at=datetime.utcnow()) 
      
      #inserting values
      db.session.add(new_user)
      db.session.commit()
      return jsonify({'message':'New user created successfully','data':new_user}),201
        # check uniqueness
@users.route('/checkEmail', methods=['GET'])
def check_email():
    email = request.args.get('email')

    if not email:
        return jsonify({'error': 'Email parameter is missing'}), 400

    # Check email uniqueness in your database
    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({'exists': True, 'message': 'Email already exists'}), 200
    else:
        return jsonify({'exists': False, 'message': 'Email is unique'}), 200


@users.route('/checkName', methods=['GET'])
def check_name():
    name = request.args.get('name')

    if not name:
        return jsonify({'error': 'Name parameter is missing'}), 400

    # Check name uniqueness in your database
    existing_user = User.query.filter_by(name=name).first()

    if existing_user:
        return jsonify({'exists': True, 'message': 'Name already exists'}), 200
    else:
        return jsonify({'exists': False, 'message': 'Name is unique'}), 200

@users.route('/checkName', methods=['GET'])
def check_contact():
    name = request.args.get('contact')

    if not name:
        return jsonify({'error': 'Contact parameter is missing'}), 400

    # Check contact uniqueness in your database
    existing_user = User.query.filter_by(contact=name).first()

    if existing_user:
        return jsonify({'exists': True, 'message': 'Contact already exists'}), 200
    else:
        return jsonify({'exists': False, 'message': 'Contact is unique'}), 200




#user login


# @users.route("/login", methods=["POST"])

#@jwt_required()
# def login():
#     email = request.json.get("email")
#     password = request.json.get("password")
#     user=User.query.filter_by(email=email).first()

#     if not email or not password:
#         return jsonify({"message":"Both email and password are required"}),400
    
#     if user:
#         password_hash= check_password_hash(user.password,password)
#         if password_hash:
#             access_token= create_access_token(identity=user.id)
#             return jsonify({"message":"User logged in successfully","access_token":access_token,"user":user}),200
#         else:
#             return jsonify({"message":"Invalid password"}),400
#     else:
#         return jsonify({"message":"email address doesn't exist"}),400



@users.route('/get/<user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user(user_id):
    user = User.query.get_or_404(user_id)

    if request.method == 'GET':
        response = {
            "id":user.id,
            "name": user.name,
            "user_type":user.user_type,
            "email": user.email,
            "contact": user.contact,
            "created_at": user.created_at
            
        }
 
        return {"success": True, "User": response,"message":"User details retrieved",'username': user.name},200

    elif request.method == 'PUT':
        data = request.get_json()

        if not data['name']:
            return jsonify({"message":"Your name is required"}),400
        
        if not data['email']:
            return jsonify({"message":"Your email address is required"}),400
        
        if not data['contact']:
            return jsonify({"message":"Your contact is required"}),400
        
        if not data['password'] or len(data['password'])<6:
            return jsonify({"message":"Your password is required and must be greater than 6 characters"}),400
        
        user.name = data['name']
        user.email = data['email']
        user.contact = data['contact']
        user.password = generate_password_hash(data['password'])
        user.updated_at = datetime.utcnow()
        db.session.add(user)
        db.session.commit()
        return {"message": f"User details of {user.name} updated successfully"},200

    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return {"message": f"User {user.name} successfully deleted."} ,200
# Add a new route to get the logged-in user details
@users.route("/get_user_details", methods=["GET"])
@jwt_required()
def get_user_details():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user:
        user_details = {
            "id": user.id,
            "name": user.name,
            "user_type": user.user_type,
            "email": user.email,
            "contact": user.contact,
            "created_at": user.created_at,
        }
        return jsonify({"success": True, "user_details": user_details}), 200
    else:
        return jsonify({"success": False, "message": "User not found"}), 404


CORS(users,supports_credentials=True)  
# logging out a user
# unset_jwt_cookies function which deletes the cookies containing the access token for the user
@users.route("/logout", methods=["POST"])
def logout():
   response = jsonify({"message": "logout successful"})
   response.headers.add('Access-Control-Credentials','True')
   unset_jwt_cookies(response)
   return response
  
  




