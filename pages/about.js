import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hakkımda
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Yazılım Mühendisi</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} />
              <SocialIcon kind="kariyernet" href={siteMetadata.kariyernet} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Merhaba,
              Ben Eren Gaygusuz.
            </p>
            <p>
            14 Aralık 1992 tarihinde Kadıköy, İstanbul'da doğdum. 13 yıl Kadıköy'ün Küçükbakkalköy Semt'inde yaşadım. İlk okulu burada yer alan Kemal Berktan İlk Öğretim Okulu'nda bitirdim. Ortaokul'a da aynı okulda başladım. 7. sınıfın ikinci dönemi taşınmak zorunda olduğumuz için okulum değişti. Kayışdağı'na taşındık. Orada Kayışdağı Arifpaşa İlk Öğretim Okulu'nda ortaokul'u bitirdim. 
            </p>
            <p>
            2007 yılı'nda, Ataşehir'deki T.E.B. Ataşehir Lisesi'ne başladım. Bir yıl orada okuduktan sonra yine taşınmak zorunda olduğumuz için Iğdır Merkez'e yerleştik. Bir anda Türkiye'nin bir ucundan diğer ucuna. :) Burada Iğdır Lisesi'ne başladım. 2011 yılı'nda liseyi bitirdim.
            </p>
            <p>
            2011 - 2013 yılında bir yandan üniversite sınavına hazırlanırken, bir yandan da Anadolu Üniversitesi Açıköğretim Fakültesi Fotoğrafçılık ve Kameramanlık Ön Lisans Programı'nı bitirdim.
            </p>
            <p>
            2013 yılı'nda Ankara'ya taşınarak, Hacettepe Üniversitesi Eğitim Fakültesi Bilgisayar ve Öğretim Teknolojileri Eğitimi Bölümü'ne başladım. İki yıl burada okuduktan sonra bölüm değiştirmeye karar verdim. Fotoğrafçılık ve Kameramanlık Ön Lisans'ı bitirdiğim için DGS'ye girme hakkımı kullanıp başarılı oldum ve Hacettepe Güzel Sanatlar Fakültesi Grafik Bölümü'ne geçiş yaptım.
            </p>
            <p>
            2015 yılı sonunda, kısa süre içerisinde bu bölümünün de bana uygun olmadığına karar vererek tekrardan sınava hazırlandım. 2016 yılı'nda, Atılım Üniversitesi Mühendislik Fakültesi Yazılım Mühendisliği'ni kazandım. Bir yıllık hazırlık eğitimi sonrasında bölüme geçiş yaptım. 2020 yılı Ocak ayı'nda da bu bölümden mezun oldum.
            </p>
            <p>
            Üniversite sonrası bir yıla yakın bir iş deneyimim oldu. Şu sıralar herhangi bir yerde çalışmıyorum. Sadece yüksek lisans eğitimime odaklanmış durumdayım. Yüksek lisans eğitimime izin verildiği sürece çalışmaya ve iş tekliflerine açığım. 
            </p>
            <p>
            Benimle iletişime geçmek isterseniz sosyal medya ikonlarına tıklayabilirsiniz. :) 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
