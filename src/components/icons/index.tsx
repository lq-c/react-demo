export default function Icons(props: any) {
  switch (props.name) {
    case 'theme':
      return (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2420" width="20" height="20"><path d="M512 960C264.533333 960 64 759.466667 64 512S264.533333 64 512 64 960 264.533333 960 512c0 81.066667-89.6 98.133333-170.666667 115.2-55.466667 12.8-110.933333 21.333333-132.266666 51.2-29.866667 34.133333-34.133333 85.333333-38.4 132.266667-8.533333 68.266667-12.8 149.333333-106.666667 149.333333z m0-853.333333c-221.866667 0-405.333333 183.466667-405.333333 405.333333s183.466667 405.333333 405.333333 405.333333c46.933333 0 55.466667-34.133333 64-110.933333 4.266667-55.466667 8.533333-115.2 46.933333-157.866667 34.133333-38.4 98.133333-51.2 157.866667-64 81.066667-17.066667 136.533333-29.866667 136.533333-72.533333 0-221.866667-183.466667-405.333333-405.333333-405.333333z" fill="#ae7dca" p-id="2421"></path><path d="M597.333333 384c-46.933333 0-85.333333-38.4-85.333333-85.333333s38.4-85.333333 85.333333-85.333334 85.333333 38.4 85.333334 85.333334-38.4 85.333333-85.333334 85.333333z m0-128c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666666 42.666667-17.066667 42.666667-42.666666-17.066667-42.666667-42.666667-42.666667zM341.333333 469.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333334 85.333333-38.4 85.333333-85.333334 85.333333z m0-128c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666667 42.666667-17.066667 42.666667-42.666667-17.066667-42.666667-42.666667-42.666667zM362.666667 746.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334s38.4-85.333333 85.333334-85.333333 85.333333 38.4 85.333333 85.333333-38.4 85.333333-85.333333 85.333334z m0-128c-25.6 0-42.666667 17.066667-42.666667 42.666666 0 21.333333 17.066667 42.666667 42.666667 42.666667s42.666667-21.333333 42.666666-42.666667-17.066667-42.666667-42.666666-42.666666z" fill="#ae7dca" p-id="2422"></path></svg>
      );
    default:
      return (<></>)
  }
}