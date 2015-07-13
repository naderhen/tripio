class Api::V1::EventsController < ActionController::API

    def index
        @events = Event.all
    end
end
