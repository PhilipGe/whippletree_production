const nodemailer = require('nodemailer')


class Emailer{

    static source_email = 'philip.gessen@gmail.com'
    static app_specific_pass = 'fqbpmnlwtyuuyzfm'

    static set_source_email(new_email){
        Emailer.source_email = new_email
    }

    static set_pass(pass){
        Emailer.app_specific_pass = pass
    }

    constructor(receiver_addr, receiver_name){
        this.receiver_addr = receiver_addr
        this.receiver_name = receiver_name

        // Create a transporter object using the default SMTP transport
        this.transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., 'Gmail' or use your SMTP settings
            auth: {
                user: Emailer.source_email, // Your email address
                pass: Emailer.app_specific_pass, // Your email password or app-specific password
            },
        });

        this.mailOptionsTemplate = {
            from: Emailer.source_email, // Sender email address
            to: receiver_addr, // Recipient email address
            subject: 'Whippletree Event Requested!', // Email subject
            // text: , // Email body (plaintext)
          };          
    }

    send_email(message){
        let mailOptions = {...this.mailOptionsTemplate}
        mailOptions.html = message

        this.transporter.sendMail(mailOptions, (error,info) => {
            if(error){

            }else{
                console.log('Email sent!', info.response)
            }
        })
    }
    
    build_email(your_name, email_address, number_of_person, phone_number, notes){
        return `<html xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:w="urn:schemas-microsoft-com:office:word"
        xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
        xmlns="http://www.w3.org/TR/REC-html40">
        
        <head>
        <meta http-equiv=Content-Type content="text/html; charset=utf-8">
        <meta name=ProgId content=Word.Document>
        <meta name=Generator content="Microsoft Word 15">
        <meta name=Originator content="Microsoft Word 15">
        <link rel=File-List href="EmailTemplate_0.fld/filelist.xml">
        <!--[if gte mso 9]><xml>
         <o:DocumentProperties>
          <o:Author>Philip Gessen</o:Author>
          <o:LastAuthor>Philip Gessen</o:LastAuthor>
          <o:Revision>2</o:Revision>
          <o:TotalTime>4</o:TotalTime>
          <o:Created>2023-10-29T23:35:00Z</o:Created>
          <o:LastSaved>2023-10-29T23:35:00Z</o:LastSaved>
          <o:Pages>1</o:Pages>
          <o:Words>34</o:Words>
          <o:Characters>199</o:Characters>
          <o:Lines>1</o:Lines>
          <o:Paragraphs>1</o:Paragraphs>
          <o:CharactersWithSpaces>232</o:CharactersWithSpaces>
          <o:Version>16.00</o:Version>
         </o:DocumentProperties>
         <o:OfficeDocumentSettings>
          <o:AllowPNG/>
         </o:OfficeDocumentSettings>
        </xml><![endif]-->
        <link rel=themeData href="EmailTemplate_0.fld/themedata.thmx">
        <link rel=colorSchemeMapping href="EmailTemplate_0.fld/colorschememapping.xml">
        <!--[if gte mso 9]><xml>
         <w:WordDocument>
          <w:SpellingState>Clean</w:SpellingState>
          <w:GrammarState>Clean</w:GrammarState>
          <w:TrackMoves>false</w:TrackMoves>
          <w:TrackFormatting/>
          <w:PunctuationKerning/>
          <w:ValidateAgainstSchemas/>
          <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
          <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
          <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
          <w:DoNotPromoteQF/>
          <w:LidThemeOther>EN-US</w:LidThemeOther>
          <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
          <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
          <w:Compatibility>
           <w:BreakWrappedTables/>
           <w:SnapToGridInCell/>
           <w:WrapTextWithPunct/>
           <w:UseAsianBreakRules/>
           <w:DontGrowAutofit/>
           <w:SplitPgBreakAndParaMark/>
           <w:EnableOpenTypeKerning/>
           <w:DontFlipMirrorIndents/>
           <w:OverrideTableStyleHps/>
          </w:Compatibility>
          <m:mathPr>
           <m:mathFont m:val="Cambria Math"/>
           <m:brkBin m:val="before"/>
           <m:brkBinSub m:val="&#45;-"/>
           <m:smallFrac m:val="off"/>
           <m:dispDef/>
           <m:lMargin m:val="0"/>
           <m:rMargin m:val="0"/>
           <m:defJc m:val="centerGroup"/>
           <m:wrapIndent m:val="1440"/>
           <m:intLim m:val="subSup"/>
           <m:naryLim m:val="undOvr"/>
          </m:mathPr></w:WordDocument>
        </xml><![endif]--><!--[if gte mso 9]><xml>
         <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
          DefSemiHidden="false" DefQFormat="false" DefPriority="99"
          LatentStyleCount="376">
          <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
          <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
          <w:LsdException Locked="false" Priority="9" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 5"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 6"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 7"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 8"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index 9"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 1"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 2"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 3"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 4"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 5"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 6"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 7"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 8"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" Name="toc 9"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Normal Indent"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="footnote text"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="annotation text"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="header"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="footer"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="index heading"/>
          <w:LsdException Locked="false" Priority="35" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="caption"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="table of figures"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="envelope address"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="envelope return"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="footnote reference"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="annotation reference"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="line number"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="page number"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="endnote reference"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="endnote text"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="table of authorities"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="macro"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="toa heading"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Bullet"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Number"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List 5"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Bullet 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Bullet 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Bullet 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Bullet 5"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Number 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Number 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Number 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Number 5"/>
          <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Closing"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Signature"/>
          <w:LsdException Locked="false" Priority="1" SemiHidden="true"
           UnhideWhenUsed="true" Name="Default Paragraph Font"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text Indent"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Continue"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Continue 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Continue 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Continue 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="List Continue 5"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Message Header"/>
          <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Salutation"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Date"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text First Indent"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text First Indent 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Note Heading"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text Indent 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Body Text Indent 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Block Text"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Hyperlink"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="FollowedHyperlink"/>
          <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
          <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Document Map"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Plain Text"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="E-mail Signature"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Top of Form"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Bottom of Form"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Normal (Web)"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Acronym"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Address"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Cite"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Code"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Definition"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Keyboard"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Preformatted"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Sample"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Typewriter"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="HTML Variable"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Normal Table"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="annotation subject"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="No List"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Outline List 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Outline List 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Outline List 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Simple 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Simple 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Simple 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Classic 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Classic 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Classic 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Classic 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Colorful 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Colorful 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Colorful 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Columns 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Columns 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Columns 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Columns 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Columns 5"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 5"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 6"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 7"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Grid 8"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 4"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 5"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 6"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 7"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table List 8"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table 3D effects 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table 3D effects 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table 3D effects 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Contemporary"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Elegant"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Professional"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Subtle 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Subtle 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Web 1"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Web 2"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Web 3"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Balloon Text"/>
          <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Table Theme"/>
          <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
          <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
          <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
          <w:LsdException Locked="false" Priority="61" Name="Light List"/>
          <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
          <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
          <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
          <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
          <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
          <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
          <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
          <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
          <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
          <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
          <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
          <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
          <w:LsdException Locked="false" Priority="34" QFormat="true"
           Name="List Paragraph"/>
          <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
          <w:LsdException Locked="false" Priority="30" QFormat="true"
           Name="Intense Quote"/>
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
          <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
          <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
          <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
          <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
          <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
          <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
          <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
          <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
          <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
          <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
          <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
          <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
          <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
          <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
          <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
          <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
          <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
          <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
          <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
          <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
          <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
          <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
          <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
          <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
          <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
          <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
          <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
          <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
          <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
          <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
          <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
          <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
          <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
          <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
          <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
          <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
          <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
          <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
          <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
          <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
          <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
          <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
          <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
          <w:LsdException Locked="false" Priority="19" QFormat="true"
           Name="Subtle Emphasis"/>
          <w:LsdException Locked="false" Priority="21" QFormat="true"
           Name="Intense Emphasis"/>
          <w:LsdException Locked="false" Priority="31" QFormat="true"
           Name="Subtle Reference"/>
          <w:LsdException Locked="false" Priority="32" QFormat="true"
           Name="Intense Reference"/>
          <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
          <w:LsdException Locked="false" Priority="37" SemiHidden="true"
           UnhideWhenUsed="true" Name="Bibliography"/>
          <w:LsdException Locked="false" Priority="39" SemiHidden="true"
           UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
          <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
          <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
          <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
          <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
          <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
          <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
          <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
          <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
          <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
          <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
          <w:LsdException Locked="false" Priority="46"
           Name="Grid Table 1 Light Accent 1"/>
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
          <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
          <w:LsdException Locked="false" Priority="51"
           Name="Grid Table 6 Colorful Accent 1"/>
          <w:LsdException Locked="false" Priority="52"
           Name="Grid Table 7 Colorful Accent 1"/>
          <w:LsdException Locked="false" Priority="46"
           Name="Grid Table 1 Light Accent 2"/>
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
          <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
          <w:LsdException Locked="false" Priority="51"
           Name="Grid Table 6 Colorful Accent 2"/>
          <w:LsdException Locked="false" Priority="52"
           Name="Grid Table 7 Colorful Accent 2"/>
          <w:LsdException Locked="false" Priority="46"
           Name="Grid Table 1 Light Accent 3"/>
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
          <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
          <w:LsdException Locked="false" Priority="51"
           Name="Grid Table 6 Colorful Accent 3"/>
          <w:LsdException Locked="false" Priority="52"
           Name="Grid Table 7 Colorful Accent 3"/>
          <w:LsdException Locked="false" Priority="46"
           Name="Grid Table 1 Light Accent 4"/>
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
          <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
          <w:LsdException Locked="false" Priority="51"
           Name="Grid Table 6 Colorful Accent 4"/>
          <w:LsdException Locked="false" Priority="52"
           Name="Grid Table 7 Colorful Accent 4"/>
          <w:LsdException Locked="false" Priority="46"
           Name="Grid Table 1 Light Accent 5"/>
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
          <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
          <w:LsdException Locked="false" Priority="51"
           Name="Grid Table 6 Colorful Accent 5"/>
          <w:LsdException Locked="false" Priority="52"
           Name="Grid Table 7 Colorful Accent 5"/>
          <w:LsdException Locked="false" Priority="46"
           Name="Grid Table 1 Light Accent 6"/>
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
          <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
          <w:LsdException Locked="false" Priority="51"
           Name="Grid Table 6 Colorful Accent 6"/>
          <w:LsdException Locked="false" Priority="52"
           Name="Grid Table 7 Colorful Accent 6"/>
          <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
          <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
          <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
          <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
          <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
          <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
          <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
          <w:LsdException Locked="false" Priority="46"
           Name="List Table 1 Light Accent 1"/>
          <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
          <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
          <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
          <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
          <w:LsdException Locked="false" Priority="51"
           Name="List Table 6 Colorful Accent 1"/>
          <w:LsdException Locked="false" Priority="52"
           Name="List Table 7 Colorful Accent 1"/>
          <w:LsdException Locked="false" Priority="46"
           Name="List Table 1 Light Accent 2"/>
          <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
          <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
          <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
          <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
          <w:LsdException Locked="false" Priority="51"
           Name="List Table 6 Colorful Accent 2"/>
          <w:LsdException Locked="false" Priority="52"
           Name="List Table 7 Colorful Accent 2"/>
          <w:LsdException Locked="false" Priority="46"
           Name="List Table 1 Light Accent 3"/>
          <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
          <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
          <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
          <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
          <w:LsdException Locked="false" Priority="51"
           Name="List Table 6 Colorful Accent 3"/>
          <w:LsdException Locked="false" Priority="52"
           Name="List Table 7 Colorful Accent 3"/>
          <w:LsdException Locked="false" Priority="46"
           Name="List Table 1 Light Accent 4"/>
          <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
          <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
          <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
          <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
          <w:LsdException Locked="false" Priority="51"
           Name="List Table 6 Colorful Accent 4"/>
          <w:LsdException Locked="false" Priority="52"
           Name="List Table 7 Colorful Accent 4"/>
          <w:LsdException Locked="false" Priority="46"
           Name="List Table 1 Light Accent 5"/>
          <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
          <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
          <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
          <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
          <w:LsdException Locked="false" Priority="51"
           Name="List Table 6 Colorful Accent 5"/>
          <w:LsdException Locked="false" Priority="52"
           Name="List Table 7 Colorful Accent 5"/>
          <w:LsdException Locked="false" Priority="46"
           Name="List Table 1 Light Accent 6"/>
          <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
          <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
          <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
          <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
          <w:LsdException Locked="false" Priority="51"
           Name="List Table 6 Colorful Accent 6"/>
          <w:LsdException Locked="false" Priority="52"
           Name="List Table 7 Colorful Accent 6"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Mention"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Smart Hyperlink"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Hashtag"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Unresolved Mention"/>
          <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
           Name="Smart Link"/>
         </w:LatentStyles>
        </xml><![endif]-->
        <style>
        <!--
         /* Font Definitions */
         @font-face
            {font-family:"Cambria Math";
            panose-1:2 4 5 3 5 4 6 3 2 4;
            mso-font-charset:0;
            mso-generic-font-family:roman;
            mso-font-pitch:variable;
            mso-font-signature:-536870145 1107305727 0 0 415 0;}
        @font-face
            {font-family:Calibri;
            panose-1:2 15 5 2 2 2 4 3 2 4;
            mso-font-charset:0;
            mso-generic-font-family:swiss;
            mso-font-pitch:variable;
            mso-font-signature:-536859905 -1073732485 9 0 511 0;}
         /* Style Definitions */
         p.MsoNormal, li.MsoNormal, div.MsoNormal
            {mso-style-unhide:no;
            mso-style-qformat:yes;
            mso-style-parent:"";
            margin:0in;
            mso-pagination:widow-orphan;
            font-size:12.0pt;
            font-family:"Calibri",sans-serif;
            mso-ascii-font-family:Calibri;
            mso-ascii-theme-font:minor-latin;
            mso-fareast-font-family:Calibri;
            mso-fareast-theme-font:minor-latin;
            mso-hansi-font-family:Calibri;
            mso-hansi-theme-font:minor-latin;
            mso-bidi-font-family:"Times New Roman";
            mso-bidi-theme-font:minor-bidi;
            mso-font-kerning:1.0pt;
            mso-ligatures:standardcontextual;}
        .MsoChpDefault
            {mso-style-type:export-only;
            mso-default-props:yes;
            font-family:"Calibri",sans-serif;
            mso-ascii-font-family:Calibri;
            mso-ascii-theme-font:minor-latin;
            mso-fareast-font-family:Calibri;
            mso-fareast-theme-font:minor-latin;
            mso-hansi-font-family:Calibri;
            mso-hansi-theme-font:minor-latin;
            mso-bidi-font-family:"Times New Roman";
            mso-bidi-theme-font:minor-bidi;}
        @page WordSection1
            {size:8.5in 11.0in;
            margin:1.0in 1.0in 1.0in 1.0in;
            mso-header-margin:.5in;
            mso-footer-margin:.5in;
            mso-paper-source:0;}
        div.WordSection1
            {page:WordSection1;}
        -->
        </style>
        <!--[if gte mso 10]>
        <style>
         /* Style Definitions */
         table.MsoNormalTable
            {mso-style-name:"Table Normal";
            mso-tstyle-rowband-size:0;
            mso-tstyle-colband-size:0;
            mso-style-noshow:yes;
            mso-style-priority:99;
            mso-style-parent:"";
            mso-padding-alt:0in 5.4pt 0in 5.4pt;
            mso-para-margin:0in;
            mso-pagination:widow-orphan;
            font-size:12.0pt;
            font-family:"Calibri",sans-serif;
            mso-ascii-font-family:Calibri;
            mso-ascii-theme-font:minor-latin;
            mso-hansi-font-family:Calibri;
            mso-hansi-theme-font:minor-latin;
            mso-bidi-font-family:"Times New Roman";
            mso-bidi-theme-font:minor-bidi;
            mso-font-kerning:1.0pt;
            mso-ligatures:standardcontextual;}
        table.MsoTableGrid
            {mso-style-name:"Table Grid";
            mso-tstyle-rowband-size:0;
            mso-tstyle-colband-size:0;
            mso-style-priority:39;
            mso-style-unhide:no;
            border:solid windowtext 1.0pt;
            mso-border-alt:solid windowtext .5pt;
            mso-padding-alt:0in 5.4pt 0in 5.4pt;
            mso-border-insideh:.5pt solid windowtext;
            mso-border-insidev:.5pt solid windowtext;
            mso-para-margin:0in;
            mso-pagination:widow-orphan;
            font-size:12.0pt;
            font-family:"Calibri",sans-serif;
            mso-ascii-font-family:Calibri;
            mso-ascii-theme-font:minor-latin;
            mso-hansi-font-family:Calibri;
            mso-hansi-theme-font:minor-latin;
            mso-bidi-font-family:"Times New Roman";
            mso-bidi-theme-font:minor-bidi;
            mso-font-kerning:1.0pt;
            mso-ligatures:standardcontextual;}
        </style>
        <![endif]-->
        </head>
        
        <body lang=EN-US style='tab-interval:.5in;word-wrap:break-word'>
        
        <div class=WordSection1>
        
        <p class=MsoNormal>Dear ${this.receiver_name},</p>
        
        <p class=MsoNormal><o:p>&nbsp;</o:p></p>
        
        <p class=MsoNormal>You’ve received a request for an event!</p>
        
        <p class=MsoNormal><o:p>&nbsp;</o:p></p>
        
        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
         style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
         mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
          <td width=312 valign=top style='width:233.75pt;border:solid windowtext 1.0pt;
          mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal><b>Name<o:p></o:p></b></p>
          </td>
          <td width=312 valign=top style='width:233.75pt;border:solid windowtext 1.0pt;
          border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
          solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal>${your_name}</p>
          </td>
         </tr>
         <tr style='mso-yfti-irow:1'>
          <td width=312 valign=top style='width:233.75pt;border:solid windowtext 1.0pt;
          border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
          padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal><b># People<o:p></o:p></b></p>
          </td>
          <td width=312 valign=top style='width:233.75pt;border-top:none;border-left:
          none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
          mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal>${number_of_person}</p>
          </td>
         </tr>
         <tr style='mso-yfti-irow:2'>
          <td width=312 valign=top style='width:233.75pt;border:solid windowtext 1.0pt;
          border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
          padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal><b>Email Address<o:p></o:p></b></p>
          </td>
          <td width=312 valign=top style='width:233.75pt;border-top:none;border-left:
          none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
          mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal>${email_address}</p>
          </td>
         </tr>
         <tr style='mso-yfti-irow:3'>
          <td width=312 valign=top style='width:233.75pt;border:solid windowtext 1.0pt;
          border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
          padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal><b>Phone Number<o:p></o:p></b></p>
          </td>
          <td width=312 valign=top style='width:233.75pt;border-top:none;border-left:
          none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
          mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal>${phone_number}</p>
          </td>
         </tr>
         <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes'>
          <td width=312 valign=top style='width:233.75pt;border:solid windowtext 1.0pt;
          border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
          padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal><b>Notes<o:p></o:p></b></p>
          </td>
          <td width=312 valign=top style='width:233.75pt;border-top:none;border-left:
          none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
          mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
          <p class=MsoNormal>${notes}</p>
          </td>
         </tr>
        </table>
        
        <p class=MsoNormal><o:p>&nbsp;</o:p></p>
        
        <p class=MsoNormal><o:p>&nbsp;</o:p></p>
        
        <p class=MsoNormal>Best,</p>
        
        <p class=MsoNormal>Healer Leads </p>
        
        </div>
        
        </body>
        
        </html>
        `
    }

}

module.exports =  { Emailer }