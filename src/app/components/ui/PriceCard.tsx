// "use client"

// import axios from "axios";
// import { Loader2 } from "lucide-react";
// import { useEffect } from "react";

// // Defines the structure of a pricing plan object.
// interface PricingPlan {
//   planName: string;
//   planDescription: string;
//   price: number;
//   validity: string;
//   ActualPrice: string;
//   popular: boolean;
//   planKey: string;
//   planFeatures: string[];
//   show: boolean;
// }

// // --- The Component ---

// const PriceCards = ({ className }: any) => {

//   // const [loading, setLoading] = useState(false)
//   // const [pricingPlans, setPricingPlans] = useState<PricingPlan[] | null>(null);
//   // const router = useRouter()

//   useEffect(() => {
//     (async () => {
//       const response = await axios.get('https://app.arthalab.com/api/subscriptions-order/', {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       console.log(response.data)
//     })()
//   }, []);

//   // const handleRazorpayPayment = async () => {
//   //   console.log("clicking")
//   // };

//   return (
//     <div>
//       loading the new content
//     </div>
//   )

//   return (
//     <div className={className}>
//       {(
//         <div className="fixed flex justify-center items-center inset-0 w-screen h-screen z-[1000] bg-background/50 backdrop-blur-sm">
//           <div className="flex flex-col items-center justify-center space-y-2">
//             <Loader2 color="hsl(var(--primary))" size={80} />
//             <p className="text-xl font-semibold">Preparing your order...</p>
//           </div>
//         </div>
//       )}

//       {/* <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-6">
//         {pricingPlans && pricingPlans.length > 0 ? (
//           pricingPlans
//             .filter((plan) => plan.show)
//             .map((plan) => (
//               <div
//                 key={plan.planKey}
//                 className={`w-full xl:basis-1/3 crypto-card overflow-hidden transform transition-transform duration-300 ease-in-out ${plan.popular
//                   ? "ring-2 ring-primary hover:shadow-xl crypto-glow"
//                   : "hover:shadow-xl"
//                   }`}
//               >
//                 <div className={`p-6 sm:px-8 bg-card ${plan.popular ? "text-primary" : ""}`}>
//                   <div className="flex items-center gap-3">
//                     <h2 className={`text-2xl font-medium ${plan.popular ? "text-primary" : ""}`}>{plan.planName}</h2>
//                     {plan.popular && (
//                       <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium ml-2">
//                         Most Popular
//                       </span>
//                     )}
//                   </div>
//                   <p className="mt-2 text-muted-foreground text-sm">{plan.planDescription}</p>

//                   <p className="mt-4 sm:mt-6">
//                     {plan.planKey === "customPack" ? (
//                       <span className="text-2xl font-medium">{plan.ActualPrice}</span>
//                     ) : (
//                       <>
//                         <span className="text-4xl font-bold sm:text-5xl">₹{plan.price}</span>
//                         <span className="text-sm font-medium">/{plan.validity}</span>
//                         <span className="text-2xl font-medium text-muted-foreground line-through pl-4">
//                           {plan.ActualPrice}
//                         </span>
//                       </>
//                     )}
//                   </p>

//                   {plan.planKey === "customPack" ? (
//                     <Link
//                       href={"/contact-us"}
//                       className={`mt-4 text-primary-foreground block rounded-md ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-primary/80"
//                         } px-12 py-3 text-center text-sm font-medium focus:outline-none focus:ring active:bg-primary/70 sm:mt-6 cursor-pointer`}
//                     >
//                       Contact us
//                     </Link>
//                   ) : (
//                     <a
//                       href="https://app.arthalab.com/dashboard/mysubscription/"
//                       target="_blank"
//                       className={`mt-4 text-primary-foreground block rounded-md ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-primary/80"
//                         } px-12 py-3 text-center text-sm font-medium focus:outline-none focus:ring active:bg-primary/70 sm:mt-6 cursor-pointer`}
//                     >
//                       Get Started
//                     </a>
//                   )}
//                 </div>
//                 <div className="w-full h-auto bg-muted/30"></div>
//                 <div className={`h-full p-6 sm:px-6 ${plan.popular ? "bg-primary/10" : "bg-primary/5"}`}>
//                   <p className="text-lg text-start">What's included:</p>
//                   <ul className="mt-4 flex flex-col gap-3">
//                     {plan.planFeatures.map((feature, index) => (
//                       <li key={index} className="flex items-center gap-3">
//                         <Check
//                           className={plan.popular ? "text-accent" : "text-crypto-success"}
//                           style={{ width: "18px", height: "18px", flexShrink: 0 }}
//                         />
//                         <span className="text-sm text-muted-foreground text-start">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))
//         ) : !loading ? (
//           <div className="flex w-full flex-col items-center justify-center gap-4 py-10">
//             <p className="text-muted-foreground">No subscription plans found.</p>
//           </div>
//         ) : null}
//       </div> */}
//     </div>
//   );
// };

// export default PriceCards;