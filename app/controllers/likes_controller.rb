class LikesController < ApplicationController
  before_action :set_work

  def create
    session_id = session.id.to_s
    unless Like.exists?(work: @work, session_id: session_id)
      @like = @work.likes.create(session_id: session_id)
    end
    respond_to do |format|
      format.html { redirect_to @work }
      format.js
    end
  end

  def destroy
    session_id = session.id.to_s
    @like = @work.likes.find_by(session_id: session_id)
    @like.destroy if @like
    respond_to do |format|
      format.html { redirect_to @work }
      format.js
    end
  end

  private
  def set_work
    @work = Work.find(params[:work_id])
  end
end
