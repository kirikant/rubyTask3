class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @employees= Employee.includes(:shop).all
    render json: @employees
  end

  def create
    @employee = Employee.new(employee_params)

    if @employee.save
      render json: @employee, status: :created
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  def show
    render @employee
  end

  def update
    @employee.update(employee_params)
    head :ok
  end

  def destroy
    @employee.delete
    head :ok
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end

  private

  def employee_params
    params.permit(:name, :surname, :age, :shop_id)
  end
end
