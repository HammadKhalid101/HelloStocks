json.partial! 'api/users/user', user: @user

# json.user do 
#     json.partial! 'api/users/user', user: @user
# end

# json.assets do
#     @user.assets.each do |asset|
#         json.set! asset.id do
#             json.partial! 'api/assets/asset', asset: asset
#         end
#     end
# end