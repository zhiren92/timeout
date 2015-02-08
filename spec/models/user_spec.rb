require 'rails_helper'

RSpec.describe User, :type => :model do

# validations
  it "has a name" do
    user = FactoryGirl.build(:user, :name => nil)

    expect(user).to respond_to(:name)
    expect(user).to be_invalid
    expect{user.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end



end
