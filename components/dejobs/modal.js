
  export default function Popup() {
    const [visible, setVisible] = React.useState(false);
    useEffect(()=>{
      let pop_status = localStorage.getItem('joblisting');
      if(!pop_status){
        setVisible(true);
        localStorage.setItem('pop_status',1);
      }
    },[])
    if(!visible) return null;

    return (
        <div className={styles.popup} onClick={() => setVisible(false)}>
            {/* <div className={styles.popupInner}> */}
            <div className={styles.popupInner}>
                <div className={styles.buttonContainer}><Button color="danger" className={styles.button}>Okay</Button></div>
            </div>    
            {/* </div> */}
        </div>
    )
}
