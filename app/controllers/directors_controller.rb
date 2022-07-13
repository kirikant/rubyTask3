class DirectorsController < ApplicationController
  before_action :set_director, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @directors= Director.all
    render json: @directors
  end

  def create
    @director = Director.new(directors_params)

    if @director.save
      render json: @director, status: :created
    else
      render json: @director.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @director
  end

  def update
    @director.update(directors_params)
    head :ok
  end

  def destroy
    @director.delete
    head :ok
  end

  private

  def set_director
    @director = Director.find(params[:id])
  end

  def directors_params
    params.permit(:name, :surname, :salary, :shop_id)
  end
end
