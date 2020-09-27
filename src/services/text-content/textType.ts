export interface TextContent {
  about: string;
  greetings: {
    early: string;
    mid: string;
    late: string;
  };
  headerTitle: string;
  headerSubtitle: string;
  sectionTitles: Record<string, string>;
  contactMsg: string;
  tel: string;
  btns: {
    contact: string;
    about: string;
    send: string;
  };
  form: {
    subject: string;
    message: string;
    messageSuccess: string;
    messageFail: string;
  };
}
