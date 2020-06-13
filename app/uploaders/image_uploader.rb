class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :file
  process resize_to_fit: [800, 800]
  storage :file

  def store_dir
    "images/work"
  end

  def default_url(*args)
    "/images/work/default_image.png"
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  def filename
    original_filename if original_filename
  end
end
