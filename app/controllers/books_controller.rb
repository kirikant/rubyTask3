class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @books = Book.all
    render json: @books
  end

  def create
    @book = Book.new(books_params)
    if !params[:authors_id].nil? && params[:authors_id]!=""
      params[:authors_id].each do |author_id|
        @book.authors << Author.find(author_id)
      end
    end

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @book
  end

  def update
    if !params[:authors_id].nil? && params[:authors_id]!=""
      @book.authors.delete
      params[:authors_id].each do |author_id|
        @book.authors << Author.find(author_id)
      end
      end
      @book.save
      @book.update(books_params)
      head :ok
    end
  end

  def destroy
    @book.authors.each do |author|
      @book.authors.destroy(author)
    end
    @book.delete
    head :ok
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def books_params
    params.permit(:title, :published_at, :theme, :shop_id)
  end

