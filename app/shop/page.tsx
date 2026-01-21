import { GlowingEffectDemo as Products } from "@/components/Products/Products";
import { ProductFooter } from "@/components/ProductFooter/ProductFooter";
import { ContactButton } from "@/components/ShopButton/button/contact-button";

export default function ShopPage() {
  return (
    <main className='min-h-screen'>
      <Products />
      <div className='flex justify-center py-12 bg-black'>
        <ContactButton />
      </div>
      <ProductFooter />
    </main>
  );
}
