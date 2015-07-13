# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Event.destroy_all

Event.create(title: "Flight to Ireland", description: "First leg of the best trip ever", start_date: Time.now + 3.days, end_date: Time.now + 3.days + 6.hours,
    booking_reference: "ABCDEFG1234567")
