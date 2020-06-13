class WorkImage < ApplicationRecord
  belongs_to :work
  mount_uploader :image, ImageUploader

  def image_url
    image.present? ? image.url : image.default_url
  end
end
