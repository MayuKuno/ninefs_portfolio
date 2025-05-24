class ApplicationController < ActionController::Base
  private

  def works_data
    Rails.configuration.x.works_data.call
  end

  def published_works
    works_data.select { |w| w[:status].to_i == 1 }
  end

  def tagged_works(tag)
    published_works.select do |w|
      w[:tech_stacks]&.any? { |t| t[:name] == tag }
    end
  end

  def find_work_by_id(id)
    works_data.find { |w| w[:id].to_s == id.to_s }
  end
end
