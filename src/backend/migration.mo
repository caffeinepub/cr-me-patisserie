import List "mo:core/List";

module {
  type ShopOpening = {
    date : Int;
    location : Text;
    description : Text;
  };

  type Product = {
    name : Text;
    description : Text;
    price : Nat;
    imageUrl : Text;
  };

  type OldActor = {};
  type NewActor = {
    shopOpenings : List.List<ShopOpening>;
    products : List.List<Product>;
    testimonials : List.List<Text>;
    bakingTips : List.List<Text>;
  };

  public func run(old : OldActor) : NewActor {
    {
      shopOpenings = List.empty<ShopOpening>();
      products = List.empty<Product>();
      testimonials = List.empty<Text>();
      bakingTips = List.empty<Text>();
    };
  };
};
