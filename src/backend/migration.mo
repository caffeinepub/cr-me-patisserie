import List "mo:core/List";
import Time "mo:core/Time";

module {
  type ShopOpening = {
    date : Time.Time;
    location : Text;
    description : Text;
  };

  type Product = {
    name : Text;
    description : Text;
    price : Nat;
    imageUrl : Text;
  };

  type CustomerQuery = {
    email : Text;
    question : Text;
    timestamp : Time.Time;
    resolved : Bool;
  };

  type OldActor = {
    shopOpenings : List.List<ShopOpening>;
    products : List.List<Product>;
    testimonials : List.List<Text>;
    bakingTips : List.List<Text>;
  };

  type NewActor = {
    shopOpenings : List.List<ShopOpening>;
    products : List.List<Product>;
    testimonials : List.List<Text>;
    bakingTips : List.List<Text>;
    customerQueries : List.List<CustomerQuery>;
  };

  public func run(old : OldActor) : NewActor {
    { old with customerQueries = List.empty<CustomerQuery>() };
  };
};
