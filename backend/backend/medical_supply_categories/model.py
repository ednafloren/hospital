from backend.db import db
from dataclasses import dataclass

@dataclass
# creating an instance of a class
class MedicalSupplyCategory(db.Model):
    __tablename__="medical_supply_categories"

    id:int
    name:str
    created_by:str
    created_at:str
    updated_at:str
    
    id=db.Column(db.Integer, primary_key= True)
    name=db.Column(db.String(50), unique= True)
    created_by=db.Column(db.Integer,db.ForeignKey('users.id'))
    created_at=db.Column(db.String(255))
    updated_at=db.Column(db.String(255))
    medical_supplies= db.relationship("MedicalSupply", backref = "medical_supply_category",cascade='all,delete-orphan')
   
    
    

# defining a function
def __init__(self,name,created_by,created_at,updated_at):
    self.name=name
    self.created_by=created_by
    self.created_at=created_at
    self.updated_at=updated_at


# function representation
def __repr__(self):
        return f"<MedicalSupplyCategory {self.name} >"