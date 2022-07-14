class AuthorsController < ApplicationController
  before_action :set_author, only: [:show,:update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @authors = Author.all
    render json: @authors
  end

  def create
    @author = Author.new(authors_params)

    if !params[:books_id].nil? && params[:books_id]!=""
      params[:books_id].each do |book_id|
        @author.books << Book.find(book_id)
      end
    end
    if @author.save
      render json: @author, status: :created
    else
      render json: @author.errors, status: :unprocessable_entity
    end
    end


  def show
    render json: @author
  end

  def update

    if !params[:books_id].nil? && params[:books_id]!=""
      @author.books.delete
      params[:books_id].each do |book_id|
        @author.books << Book.find(book_id)
      end
    end
    @author.save
    @author.update(authors_params)
    head :ok
  end

  def destroy
    @author.books.each do |book|
      @author.books.destroy(book)
    end
    @author.delete
    head :ok
  end

  private

  def set_author
    @author = Author.find(params[:id])
  end

  def authors_params
    params.permit(:name, :surname, :style)
  end

end
