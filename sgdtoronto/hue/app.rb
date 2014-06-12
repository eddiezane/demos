require 'hue'
# require 'keen'
require 'sinatra'

$colors = {
  "red" => [0.675, 0.322],
  "orange" => [0.55, 0.5],
  "yellow" => [0.47, 0.47],
  "green" => [0.41, 0.49],
  "blue" => [0.167, 0.04],
  "indigo" => [0.421, 0.181],
  "violet" => [0.25, 0.1]
}

# $keen = Keen::Client.new(project_id: ENV['KEEN_ID'], write_key: ENV['KEEN_KEY')

$client = Hue::Client.new

post "/" do
  lights = $client.lights
  unless (color = params[:subject]) == nil
    color.downcase!
    if $colors[color]
      case params[:to]
      when "demo@light.bymail.in"
        lights.each { |light| light.set_xy $colors[color][0], $colors[color][1] }
      when "all@light.bymail.in"
        lights.each { |light| light.set_xy $colors[color][0], $colors[color][1] }
      when "light1@light.bymail.in"
        lights[0].set_xy $colors[color][0], $colors[color][1]
      when "light2@light.bymail.in"
        lights[1].set_xy $colors[color][0], $colors[color][1]
      when "light3@light.bymail.in"
        lights[2].set_xy $colors[color][0], $colors[color][1]
      end
      # $keen.publish("users", { email: params[:from], to: params[:to], color: color })
    end
  end
  200
end
