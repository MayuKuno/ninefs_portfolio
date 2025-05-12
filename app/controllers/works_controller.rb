class WorksController < ApplicationController
  def index
    @works = if params[:tag]
               tagged_works(params[:tag])
             else
               published_works
             end
  end

  def show
    @work = find_work_by_id(params[:id])
    if @work
      gon.description = @work[:description]
    else
      redirect_to works_path, alert: "作品が見つかりませんでした"
    end
  end

  private

  def work_params
    # YAMLベースでは基本使わないが残しても可
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
