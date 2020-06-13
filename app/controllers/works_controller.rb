class WorksController < ApplicationController
  def index
    if params[:tag]
      @works = Work.published
                .joins(:tech_stacks)
                .where(tech_stacks: { name: params[:tag] })
                .distinct
    else
      @works = Work.published
    end    
  end

  def show
    @work = Work.find(params[:id])
    gon.description = @work.description
  end

  private
  def work_params
    params.require(:work).permit(
      :title,
      :description,
      :image,
      :readme_url,
      :website_url,
      :status
    )
  end
end



