import { GlowingEffectDemo as Products } from "@/components/Products/Products";
import { ProductFooter } from "@/components/ProductFooter/ProductFooter";
import { ContactButton } from "@/components/ShopButton/button/contact-button";
import { AboutButton } from "@/components/ShopButton/button/about-button";

export default function ShopPage() {
  return (
    <main className='min-h-screen'>
      <Products />
      <div className='flex justify-center gap-6 py-12 bg-black'>
        <AboutButton />
        <ContactButton />
      </div>
      <ProductFooter />
    </main>
  );
}
