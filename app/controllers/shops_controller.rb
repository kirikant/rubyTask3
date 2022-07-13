class ShopsController < ApplicationController
  before_action :set_shop, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @shop= Shop.all
    render json: @shop
  end

  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      render json: @shop, status: :created
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @shop
  end

  def update
    @shop.update(shop_params)
  end

  def destroy
    @shop.delete
  end

  private

  def set_shop
    @shop = Shop.find(params[:id])
  end

  private

  def shop_params
    params.permit(:title,:address)
  end
end
