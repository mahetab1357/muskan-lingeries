import b1 from '../assets/images/b1.png';
import b2 from '../assets/images/b2.png';
import b3 from '../assets/images/b3.png';
import b4 from '../assets/images/b4.png';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';

const products = [
  { id: 1, name: "Padded Bra - Classic", category: "Bra",
    price: "₹180", originalPrice: "₹250",
    tag: "Best Seller", sizes: ["30","32","34","36","38"],
    colors: ["#E8547A","#3D1A2E","#FFFFFF","#000000"],
    gradient: "linear-gradient(135deg, #F9D0DC, #E8547A)",
    image: b1,
    description: "Comfortable daily wear padded bra" },

  { id: 2, name: "Sports Bra", category: "Bra",
    price: "₹220", originalPrice: "₹320",
    tag: "New", sizes: ["S","M","L","XL"],
    colors: ["#E8547A","#333","#4A90D9"],
    gradient: "linear-gradient(135deg, #D4E8FA, #5490D4)",
    image: b2,
    description: "High support sports bra" },

  { id: 3, name: "Full Coverage Bra", category: "Bra",
    price: "₹195", originalPrice: "₹280",
    tag: "", sizes: ["32","34","36","38","40"],
    colors: ["#FFF","#E8547A","#3D1A2E"],
    gradient: "linear-gradient(135deg, #FAD4E8, #D4549A)",
    image: b3,
    description: "Full coverage for maximum comfort" },

  { id: 4, name: "Lace Bra Set", category: "Bra",
    price: "₹350", originalPrice: "₹500",
    tag: "Premium", sizes: ["32","34","36"],
    colors: ["#E8547A","#000","#D4A843"],
    gradient: "linear-gradient(135deg, #F9D0DC, #C23A60)",
    image: b4,
    description: "Elegant lace design bra" },

  { id: 5, name: "Cotton Brief", category: "Panties",
    price: "₹80", originalPrice: "₹120",
    tag: "Best Seller", sizes: ["S","M","L","XL","XXL"],
    colors: ["#FFF","#E8547A","#333","#4A90D9","#50D494"],
    gradient: "linear-gradient(135deg, #D4FAE8, #54D490)",
    image: p1,
    description: "100% cotton comfortable brief" },

  { id: 6, name: "Hipster Panty", category: "Panties",
    price: "₹95", originalPrice: "₹140",
    tag: "", sizes: ["S","M","L","XL"],
    colors: ["#E8547A","#D4A843","#333"],
    gradient: "linear-gradient(135deg, #FAF0D4, #D4A843)",
    image: p2,
    description: "Comfortable hipster cut panty" },

  { id: 7, name: "Thong", category: "Panties",
    price: "₹75", originalPrice: "₹110",
    tag: "", sizes: ["S","M","L"],
    colors: ["#E8547A","#000","#FFF"],
    gradient: "linear-gradient(135deg, #FAD4E8, #D4549A)",
    image: p3,
    description: "Seamless no-show thong" },

  { id: 8, name: "Boyshort", category: "Panties",
    price: "₹110", originalPrice: "₹160",
    tag: "Comfortable", sizes: ["S","M","L","XL"],
    colors: ["#333","#E8547A","#4A90D9"],
    gradient: "linear-gradient(135deg, #D4E8FA, #4A90D9)",
    image: p4,
    description: "Full coverage boyshort panty" },


  { id: 13, name: "Bra Wholesale Pack", category: "Wholesale",
    price: "₹1200 / dozen", originalPrice: "₹1800",
    tag: "Wholesale", sizes: ["Mixed Sizes"],
    colors: ["#E8547A"],
    gradient: "linear-gradient(135deg, #F9D0DC, #E8547A)",
    image: b1,
    description: "Wholesale bra pack (12 pieces)" },

  { id: 14, name: "Panty Wholesale Pack", category: "Wholesale",
    price: "₹700 / dozen", originalPrice: "₹1000",
    tag: "Wholesale", sizes: ["Mixed Sizes"],
    colors: ["#4A90D9"],
    gradient: "linear-gradient(135deg, #D4E8FA, #4A90D9)",
    image: p1,
    description: "Wholesale panty pack (12 pieces)" },

  { id: 15, name: "Mixed Innerwear Pack", category: "Wholesale",
    price: "₹2500 / lot", originalPrice: "₹3500",
    tag: "Best Value", sizes: ["All Sizes"],
    colors: ["#D4A843"],
    gradient: "linear-gradient(135deg, #FAF0D4, #D4A843)",
    image: b2,
    description: "Mixed innerwear wholesale lot" },

  { id: 16, name: "Full Set — Bra + Panty", category: "Bra",
    price: "₹320", originalPrice: "₹480",
    tag: "Combo", sizes: ["32","34","36","38"],
    colors: ["#E8547A","#C23A60","#3D1A2E"],
    gradient: "linear-gradient(135deg, #FAD4E8, #C23A60)",
    image: b1,
    description: "Matching bra and panty set" },
];

export default products;
