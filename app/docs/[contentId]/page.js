import ContentDisplay from "@/app/components/ContentDisplay"

const ContentPage = ({params:{contentId}}) => {
  return (
    <ContentDisplay id={contentId}/>
  )
}

export default ContentPage