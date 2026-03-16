import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestTextField extends MDComponent {
    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-form>
                <md-layout-column >

                    <!-- standard -->
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <!-- no label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text0" required placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text1" required placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text2" required placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text3" required placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text4" required placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text5" required placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text6" required adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text7" required adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text8" required adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text9" required adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text10" required adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text11" required adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text12" required label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text13" required label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text14" required label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text15" required label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text16" required label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text17" required label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- no label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text18" required value="Value" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text19" required value="Value" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text20" required value="Value" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text21" required value="Value" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text22" required value="Value" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text23" required value="Value" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text24" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text25" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text26" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text27" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text28" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text29" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text30" required value="Value" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text31" required value="Value" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text32" required value="Value" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text33" required value="Value" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text34" required value="Value" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text35" required value="Value" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                    </md-layout-column-item>

                    
                    <!-- filled -->
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <!-- no label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text36" required variant="filled" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text37" required variant="filled" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text38" required variant="filled" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text39" required variant="filled" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text40" required variant="filled" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text41" required variant="filled" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text42" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text43" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text44" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text45" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text46" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text47" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text48" required variant="filled" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text49" required variant="filled" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text50" required variant="filled" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text51" required variant="filled" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text52" required variant="filled" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text53" required variant="filled" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- no label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text54" required variant="filled" value="Value" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text55" required variant="filled" value="Value" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text56" required variant="filled" value="Value" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text57" required variant="filled" value="Value" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text58" required variant="filled" value="Value" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text59" required variant="filled" value="Value" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text60" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text61" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text62" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text63" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text64" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text65" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text66" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text67" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text68" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text69" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text70" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text71" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                    </md-layout-column-item>

                    
                    <!-- outlined -->
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <!-- no label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text72" required variant="outlined" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text73" required variant="outlined" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text74" required variant="outlined" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text75" required variant="outlined" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text76" required variant="outlined" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text77" required variant="outlined" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text78" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text79" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text80" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text81" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text82" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text83" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text84" required variant="outlined" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text85" required variant="outlined" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text86" required variant="outlined" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text87" required variant="outlined" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text88" required variant="outlined" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text89" required variant="outlined" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- no label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text90" required variant="outlined" value="Value" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text91" required variant="outlined" value="Value" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text92" required variant="outlined" value="Value" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text93" required variant="outlined" value="Value" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text94" required variant="outlined" value="Value" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text95" required variant="outlined" value="Value" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text96" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text97" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text98" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text99" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text100" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text101" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text102" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text103" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text104" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text105" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text106" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field name="text107" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                    </md-layout-column-item>
                    
                    <md-layout-column-item expanded="12" medium="8" compact="4" >
                        <md-button label="reset" type="reset"></md-button>
                        <md-button label="submit" type="submit"></md-button>
                    </md-layout-column-item>
                    
                </md-layout-column>
            </md-form>
        `;
    }
}

customElements.define("test-text-field", TestTextField);

export default document.createElement("test-text-field");
