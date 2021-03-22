@assets.each do |asset|
    json.set! asset.id do
        json.partial! 'api/assets/asset', asset: asset
    end
end