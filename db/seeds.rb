work = Work.find_by(id: 2) || raise("Work with id 2 not found")

temp = "Frame Customization – Apply default frames or create your own.\nImage Upload & Download – Easily edit and save personalized frames.\nCommunity Sharing – Share your frames and use others' creations.\nLike & Explore – Discover popular frames and engage with the community."

work.update(features: temp) 
