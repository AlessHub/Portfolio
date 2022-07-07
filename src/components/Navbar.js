const select = useRef(null);
const ChangeColor = () => { 
  useEffect(() => {select.addEventListener("change", () => {
    document.documentElement.style.setProperty('--primary-color', 'red')})})}

// var sheet = document.styleSheets[0];

    // select.addEventListener('change', function() {
    // sheet.insertRule(":root{--primary-color: orange;");})
