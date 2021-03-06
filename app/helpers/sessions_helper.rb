module SessionsHelper
  def log_in(user)
    session[:user_id]=user.id.to_s

    
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    if @current_user
      cookies[:id] = @current_user.id 
      cookies[:name] = @current_user.name
      @current_user
    end
  end

  def logged_in?
    session[:user_id] != nil
  end

  def log_out
    session.delete(:user_id)
    @current_user = nil
  end
end

