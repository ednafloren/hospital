from backend.db import db
from dataclasses import dataclass
from sqlalchemy.orm import relationship

@dataclass
class Medicine(db.Model):
  __tablename__ = 'medicines'
  id:int
  name:str
  unit_price:str
  image:str
  stock:str
  medicine_category_id:int
  created_by :str
  created_at :str
  updated_at :str
  expiry_date: str

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100),unique=True)
  unit_price = db.Column(db.String(10))
  image = db.Column(db.String(200))
  stock = db.Column(db.String(250))
  created_by  = db.Column(db.Integer,db.ForeignKey('users.id'))
  created_at = db.Column(db.String(255),nullable=True)
  updated_at = db.Column(db.String(255),nullable=True)
  medicine_category_id= db.Column(db.Integer, db.ForeignKey('medicine_categories.id'))
  expiry_date = db.Column(db.String(255), nullable=True)  # New column for expiry date

#   rtnship
  dispensed_stocks=relationship('DispensedStock',backref='medicine',cascade='all,delete-orphan')
  


def __init__(self, name, image, unit_price, stock, created_by, created_at, updated_at, medicine_category_id, expiry_date):
      self.name = name
      self.image = image
      self.unit_price = unit_price
      self.stock = stock
      self.created_by = created_by
      self.created_at = created_at
      self.updated_at = updated_at
      self.medicine_category_id = medicine_category_id
      self.expiry_date = expiry_date  # Initialize the new column

def __repr__(self):
      return f"<Medicine {self.name}>"

def save(self):
      db.session.add(self)
      db.session.commit()

def delete(self):
     db.session.delete(self)
     db.session.commit()