import ContentDisplay from "@/app/components/ContentDisplay"

const SubContentPage = ({params:{subContentId}}) => {
  return (
    <ContentDisplay id={subContentId}/>
  )
}

export default SubContentPage