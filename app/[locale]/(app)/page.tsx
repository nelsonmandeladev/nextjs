import { TRANSlATIONS_NAMESPACES } from "@/constants";
import initTranslations from "@/lib/i18n";

interface PageProps {
  params: {
    locale: string
  }
}
export default async function Home(props: PageProps) {
  const { params } = props;
  const { t } = await initTranslations(params.locale, TRANSlATIONS_NAMESPACES);

  return (
    <main>
      <div className="m-4">
        {t("home:hello")}
      </div>
    </main>
  );
}
