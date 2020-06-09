class ProjectsController < ApplicationController
  def index
    @presenter = ProjectsPresenter.new(params)
  end

  def show
    @project = Project.find(params[:id])
  end
end
