if Rails.env.production?
  CarrierWave.configure do |config|
    config.storage = :file  # S3 を無効にしてローカルストレージに変更
  end
end
