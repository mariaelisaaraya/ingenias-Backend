MVC vs MVP Architecture — What’s the Difference?
![Image text](./MVC%20vs%20MVP%20Architecture.jpeg)

MVC (Model View Controller) and MVP (Model View Presenter) are design patterns that separate an application into distinct components. Both patterns aim to separate concerns, but they have some differences in their approach.

𝗧𝗼 𝗴𝗲𝘁 𝗮 𝗰𝗹𝗲𝗮𝗿 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 of how each pattern works and the differences between them, 𝗹𝗲𝘁’𝘀 𝗯𝗿𝗲𝗮𝗸 𝗱𝗼𝘄𝗻 𝗵𝗼𝘄 𝘁𝗵𝗲𝘆 𝗼𝗽𝗲𝗿𝗮𝘁𝗲:

𝟭) 𝗨𝘀𝗲𝗿 𝗶𝗻𝘁𝗲𝗿𝗮𝗰𝘁𝗶𝗼𝗻
Both patterns start when a user interacts with the application's UI, which is managed by the View.

𝟮) 𝗘𝘃𝗲𝗻𝘁 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴
The view recognizes user activities that cause events, such as button clicks or keystroke events. In MVC, the View forwards the event to the corresponding Controller. Whereas, in MVP, the View forwards the event to the related Presenter.

𝟯) 𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗹𝗼𝗴𝗶𝗰
In both patterns, the Controller and Presenter take over at this stage. Both components process the event and apply any business logic required. They also decide if data manipulation is necessary, and if so they interact with the Model.

𝟰) 𝗠𝗼𝗱𝗲𝗹 𝗨𝗽𝗱𝗮𝘁𝗲
The process at this stage is again very similar for both patterns. If data changes are required, then both the Controller and Presenter will instruct the Model to update its data. The Model will then handle the data manipulation and persist the changes.

𝟱) 𝗨𝗜 𝘂𝗽𝗱𝗮𝘁𝗲𝘀
𝗧𝗵𝗶𝘀 𝗶𝘀 𝘁𝗵𝗲 𝗺𝗮𝗶𝗻 𝗮𝗿𝗲𝗮 𝘄𝗵𝗲𝗿𝗲 𝘁𝗵𝗲 𝘁𝘄𝗼 𝗱𝗲𝘀𝗶𝗴𝗻 𝗽𝗮𝘁𝘁𝗲𝗿𝗻𝘀 𝗱𝗶𝗳𝗳𝗲𝗿. In the MVC pattern, the 𝗩𝗶𝗲𝘄 𝗹𝗶𝘀𝘁𝗲𝗻𝘀 𝗳𝗼𝗿 𝗰𝗵𝗮𝗻𝗴𝗲𝘀 𝗶𝗻 𝘁𝗵𝗲 𝗠𝗼𝗱𝗲𝗹 𝗮𝗻𝗱 𝘂𝗽𝗱𝗮𝘁𝗲𝘀 𝗶𝘁𝘀𝗲𝗹𝗳 𝗮𝗰𝗰𝗼𝗿𝗱𝗶𝗻𝗴𝗹𝘆. In MVP, the 𝗣𝗿𝗲𝘀𝗲𝗻𝘁𝗲𝗿 𝗽𝗹𝗮𝘆𝘀 𝗮𝗻 𝗮𝗰𝘁𝗶𝘃𝗲 𝗿𝗼𝗹𝗲. It fetches the new data from the Model and directly updates the View to reflect those changes.

𝗠𝗩𝗣 𝘄𝗮𝘀 𝗲𝘀𝘁𝗮𝗯𝗹𝗶𝘀𝗵𝗲𝗱 𝗮𝗳𝘁𝗲𝗿 𝗠𝗩𝗖 to improve on the drawbacks of MVC. Both patterns aim to separate concerns and improve maintainability. However, their 𝗽𝗿𝗼𝗰𝗲𝗱𝘂𝗿𝗲 𝗱𝗶𝘃𝗲𝗿𝗴𝗲𝘀 𝘄𝗵𝗲𝗻 𝗶𝘁 𝗰𝗼𝗺𝗲𝘀 𝘁𝗼 𝘄𝗵𝗼 𝗵𝗮𝗻𝗱𝗹𝗲𝘀 𝘁𝗵𝗲 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗹𝗼𝗴𝗶𝗰 and 𝗵𝗼𝘄 𝘁𝗵𝗲 𝗨𝗜 𝗴𝗲𝘁𝘀 𝘂𝗽𝗱𝗮𝘁𝗲𝗱. 𝗠𝗩𝗖 𝗶𝘀 𝘁𝘆𝗽𝗶𝗰𝗮𝗹𝗹𝘆 𝗹𝗲𝘀𝘀 𝗰𝗼𝗺𝗽𝗹𝗲𝘅 but it 𝗰𝗮𝗻 𝗵𝗮𝘃𝗲 𝘁𝗶𝗴𝗵𝘁𝗹𝘆 𝗰𝗼𝘂𝗽𝗹𝗲𝗱 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀. Whereas, 𝗠𝗩𝗣 𝗶𝘀 𝗴𝗲𝗻𝗲𝗿𝗮𝗹𝗹𝘆 𝗺𝗼𝗿𝗲 𝗰𝗼𝗺𝗽𝗹𝗲𝘅 but 𝗵𝗮𝘀 𝗺𝗼𝗿𝗲 𝗱𝗲𝗰𝗼𝘂𝗽𝗹𝗲𝗱 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀.
