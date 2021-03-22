# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



    User.create!(
        first_name: 'Ariton', 
        last_name: 'Sefedini', 
        username: 'aritontrades', 
        email: 'ariton@hellostocks.com', 
        buying_power: 2000000,
        password: 'password1234')

    User.create!(
        first_name: 'Ryan', 
        last_name: 'Naing', 
        username: 'ryantrades', 
        email: 'ryan@hellostocks.com', 
        buying_power: 1000000,
        password: 'password1234')

    User.create!(
        first_name: 'Lakhte', 
        last_name: 'Agha', 
        username: 'lakhtetrades', 
        email: 'lakhte@hellostocks.com', 
        buying_power: 10000000,
        password: 'password1234')

    User.create!(
        first_name: 'Jaspreet', 
        last_name: 'Singh', 
        username: 'jastrades', 
        email: 'jaspreet@hellostocks.com', 
        buying_power: 200000,
        password: 'password1234')

    User.create!(
        first_name: 'Charm', 
        last_name: 'Uwu', 
        username: 'charmtrades', 
        email: 'charm@hellostocks.com', 
        buying_power: 300000,
        password: 'password1234')
    
    User.create!(
        first_name: 'Sayeef', 
        last_name: 'Alam', 
        username: 'shantotrades', 
        email: 'shanto@hellostocks.com', 
        buying_power: 2000000,
        password: 'password1234')

    User.create!(
        first_name: 'Hammad', 
        last_name: 'Khalid', 
        username: 'hammadtrades', 
        email: 'hammad@hellostocksmanagement.com', 
        buying_power: 100000000,
        password: 'verysecure')

    User.create!(
        first_name: 'Demo', 
        last_name: 'User', 
        username: 'demotrades', 
        email: 'demotrades@hellostocks.com', 
        buying_power: 10000,
        password: 'password1234')

    # # Stockcryptos
    Stock.create!(
        name: "Apple",
        tikr: "AAPL",
        last_price: 127.9109098,
        percent_change: 4.23,
    )

    Stock.create!(
        name: "Tesla",
        tikr: "TSLA",
        last_price: 690.33,
        percent_change: 2.16,
    )

    Stock.create!(
        name: "Google",
        tikr: "GOOGL",
        last_price: 2026.96,
        percent_change: 0.28,
    )

    Stock.create!(
        name: "Facebook",
        tikr: "FB",
        last_price: 299.43,
        percent_change: 3.21,
    )

    # Assets
    Asset.create!(
        stock_id: 1,
        user_id: 1, 
        quantity: 20,
        avg_price: 125.22,
    )

    Asset.create!(
        stock_id: 2,
        user_id: 1, 
        quantity: 10,
        avg_price: 550.67,
    )

    Asset.create!(
        stock_id: 3,
        user_id: 1, 
        quantity: 40,
        avg_price: 1800.80,
    )

    # Asset.create!(
    #     stock_id: 1,
    #     user_id: 8, 
    #     quantity: 20,
    #     avg_price: 125.22,
    # )

    # Asset.create!(
    #     stock_id: 2,
    #     user_id: 8, 
    #     quantity: 10,
    #     avg_price: 550.67,
    # )

    # Asset.create!(
    #     stock_id: 3,
    #     user_id: 8, 
    #     quantity: 40,
    #     avg_price: 1800.80,
    # )