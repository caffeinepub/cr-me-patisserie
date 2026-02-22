import Time "mo:core/Time";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";


// Transition to new actor using the migration function during upgrade

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
  };

  // State for user profiles
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

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

  // Featured Services ops - Public access
  public query func getShopOpenings() : async [ShopOpening] {
    shopOpenings.toArray();
  };

  // Product ops - Public access
  public query func getProducts() : async [Product] {
    products.toArray();
  };

  // Testimonials ops - Public read, any user can add
  public query func getTestimonials() : async [Text] {
    testimonials.toArray();
  };

  public shared func addTestimonial(testimonial : Text) : async () {
    testimonials.add(testimonial);
  };

  // Baking Tips ops - Public read, admin-only write
  public query func getBakingTips() : async [Text] {
    bakingTips.toArray();
  };

  public shared ({ caller }) func addBakingTip(tip : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add baking tips");
    };
    bakingTips.add(tip);
  };
};
