document.addEventListener("DOMContentLoaded", () => {
  const tabContainer = document.getElementById("tab-container");
  const contentContainer = document.getElementById("tab-content-container");

  console.log("in js file")
  const tabsData = ([] = [
    {
      id: "tab1",
      label: "Tab 1",
      content: "This is tab one content",
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: "This is tab two content",
    },
    {
      id: "tab3",
      label: "Tab 3",
      content: "This is tab three content",
    },
  ]);

//   tabsData.forEach((tabD)=>{
//     // create tab
//     const tab = document.createElement('div');
//     tab.classList.add('tab');
//     tab.textContent = tabD.label;

//     // create content
//     const content = document.createElement("div");
//     content.classList.add("tab-content");
//     content.textContent = tabD.content;

//     tab.addEventListener("click" ,()=>{
//       console.log("clicked")
//         tabsData.forEach((tabData)=>{
//             document.getElementById(tabData.id).classList.remove("active");
//             document.getElementById(tabData.id + "-content").classList.remove("active");
//         })
//     });
//     tab.classList.add('active');
//     content.classList.add('active');

//     tabContainer.appendChild(tab);
//     contentContainer.appendChild(content);
  
  
//     tab.id = tabD.id;
//     content.id = tabD.id + '-content'

//   });

tabsData.forEach((tabData) => {
    // Create tab element
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = tabData.label;

    // Create content element
    const content = document.createElement("div");
    content.classList.add("tab-content");
    content.textContent = tabData.content;

    // Set up click event for the tab
    tab.addEventListener("click", () => {
      // Remove 'active' class from all tabs and contents
      console.log("click")
      tabsData.forEach((tabData) => {
        document.getElementById(tabData.id).classList.remove("active");
        document
          .getElementById(tabData.id + "-content")
          .classList.remove("active");
      });

      // Add 'active' class to the clicked tab and content
      tab.classList.add("active");
      content.classList.add("active");
    });

    // Append tab and content to the containers
    tabContainer.appendChild(tab);
    contentContainer.appendChild(content);

    // Set IDs for easy reference
    tab.id = tabData.id;
    content.id = tabData.id + "-content";
  });

  if(tabsData.length >0 ){
    console.log("in tabs")
    document.getElementById(tabsData[0].id).classList.add("active");
    document.getElementById(tabsData[0].id + '-content').classList.add("active");
}
});


