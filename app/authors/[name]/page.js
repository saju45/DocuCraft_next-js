import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

const AuthorPage = ({params:{name}}) => {
  const docs=getDocuments();
  const matchesDocuments=getDocumentsByAuthor(docs,name);
  return (
    <ContentDisplay id={matchesDocuments[0].id}/>
  )
}

export default AuthorPage