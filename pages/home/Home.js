import { HtmlHead, Header, PageHeader, MainMenu } from 'features';
import { APP_TITLE, APP_DESCRIPTION } from 'constants/app';
import { Main } from 'components';

export default function Home() {
  return (
    <>
      <HtmlHead title='Home' />
      <Header />
      <Main>
        <PageHeader title={APP_TITLE} description={APP_DESCRIPTION} />
        <MainMenu />
      </Main>
    </>
  );
}
