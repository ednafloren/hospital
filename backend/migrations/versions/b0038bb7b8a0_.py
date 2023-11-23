"""empty message

Revision ID: b0038bb7b8a0
Revises: 
Create Date: 2023-11-15 16:14:53.508927

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b0038bb7b8a0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('contact', sa.String(length=255), nullable=True),
    sa.Column('user_type', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('medical_supply_categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('medicine_categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('medical_supplies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('unit_price', sa.String(length=10), nullable=True),
    sa.Column('image', sa.String(length=200), nullable=True),
    sa.Column('stock', sa.Integer(), nullable=True),
    sa.Column('medical_supply_category_id', sa.Integer(), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['users.id'], ),
    sa.ForeignKeyConstraint(['medical_supply_category_id'], ['medical_supply_categories.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('medicines',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('unit_price', sa.String(length=10), nullable=True),
    sa.Column('image', sa.String(length=200), nullable=True),
    sa.Column('stock', sa.String(length=250), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.Column('medicine_category_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['users.id'], ),
    sa.ForeignKeyConstraint(['medicine_category_id'], ['medicine_categories.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('dispensed_stocks',
    sa.Column('medical_supply_quantity', sa.String(length=250), nullable=True),
    sa.Column('medicine_quantity', sa.String(length=250), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=100), nullable=True),
    sa.Column('medical_supply_id', sa.Integer(), nullable=True),
    sa.Column('medicine_id', sa.Integer(), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['users.id'], ),
    sa.ForeignKeyConstraint(['medical_supply_id'], ['medical_supplies.id'], ),
    sa.ForeignKeyConstraint(['medicine_id'], ['medicines.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('stock_orders',
    sa.Column('medical_supply_quantity', sa.String(length=250), nullable=True),
    sa.Column('medicine_quantity', sa.String(length=250), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=100), nullable=True),
    sa.Column('medical_supply_id', sa.Integer(), nullable=True),
    sa.Column('medicine_id', sa.Integer(), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['users.id'], ),
    sa.ForeignKeyConstraint(['medical_supply_id'], ['medical_supplies.id'], ),
    sa.ForeignKeyConstraint(['medicine_id'], ['medicines.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('received_purchases',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=100), nullable=True),
    sa.Column('medical_supply_quantity', sa.String(length=250), nullable=True),
    sa.Column('medicine_quantity', sa.String(length=250), nullable=True),
    sa.Column('stock_order_id', sa.Integer(), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(length=255), nullable=True),
    sa.Column('updated_at', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['users.id'], ),
    sa.ForeignKeyConstraint(['stock_order_id'], ['stock_orders.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('received_purchases')
    op.drop_table('stock_orders')
    op.drop_table('dispensed_stocks')
    op.drop_table('medicines')
    op.drop_table('medical_supplies')
    op.drop_table('medicine_categories')
    op.drop_table('medical_supply_categories')
    op.drop_table('users')
    # ### end Alembic commands ###
