import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

// Render children
const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;

// HOC

// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   );
// };

// export default withLayout;

// export default withLayout(Page);

// Page content as a prop

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.content}
//   </div>
// );

// export default Layout;

// const indexPageContent = <p>Hello Next.js</p>;

// export default function Index() {
//   return <Layout content={indexPageContent} />;
// }