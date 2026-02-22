import Time "mo:core/Time";
import List "mo:core/List";
import Migration "migration";

(with migration = Migration.run)
actor {
  // Types
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

  // State
  let shopOpenings = List.empty<ShopOpening>();
  let products = List.empty<Product>();
  var testimonials : List.List<Text> = List.empty<Text>();
  var bakingTips : List.List<Text> = List.empty<Text>();

  // Featured Services ops
  public query func getShopOpenings() : async [ShopOpening] {
    shopOpenings.toArray();
  };

  // Product ops
  public query func getProducts() : async [Product] {
    products.toArray();
  };

  // Testimonials ops
  public query func getTestimonials() : async [Text] {
    testimonials.toArray();
  };

  public func addTestimonial(testimonial : Text) : async () {
    testimonials.add(testimonial);
  };

  // Baking Tips ops
  public query func getBakingTips() : async [Text] {
    bakingTips.toArray();
  };

  public func addBakingTip(tip : Text) : async () {
    bakingTips.add(tip);
  };

  // Social Media integration is handled in the frontend!
};
