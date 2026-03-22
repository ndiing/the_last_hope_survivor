import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestTextFieldRound extends MDComponent {
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
                                <md-text-field shape="round" name="text0" required placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text1" required placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text2" required placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text3" required placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text4" required placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text5" required placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text6" required adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text7" required adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text8" required adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text9" required adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text10" required adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text11" required adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text12" required label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text13" required label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text14" required label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text15" required label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text16" required label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text17" required label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- no label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text18" required value="Value" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text19" required value="Value" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text20" required value="Value" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text21" required value="Value" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text22" required value="Value" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text23" required value="Value" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text24" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text25" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text26" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text27" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text28" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text29" required value="Value" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text30" required value="Value" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text31" required value="Value" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text32" required value="Value" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text33" required value="Value" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text34" required value="Value" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text35" required value="Value" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                    </md-layout-column-item>

                    
                    <!-- filled -->
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <!-- no label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text36" required variant="filled" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text37" required variant="filled" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text38" required variant="filled" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text39" required variant="filled" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text40" required variant="filled" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text41" required variant="filled" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text42" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text43" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text44" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text45" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text46" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text47" required variant="filled" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text48" required variant="filled" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text49" required variant="filled" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text50" required variant="filled" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text51" required variant="filled" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text52" required variant="filled" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text53" required variant="filled" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- no label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text54" required variant="filled" value="Value" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text55" required variant="filled" value="Value" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text56" required variant="filled" value="Value" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text57" required variant="filled" value="Value" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text58" required variant="filled" value="Value" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text59" required variant="filled" value="Value" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text60" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text61" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text62" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text63" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text64" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text65" required variant="filled" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text66" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text67" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text68" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text69" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text70" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text71" required variant="filled" value="Value" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                    </md-layout-column-item>

                    
                    <!-- outlined -->
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <!-- no label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text72" required variant="outlined" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text73" required variant="outlined" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text74" required variant="outlined" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text75" required variant="outlined" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text76" required variant="outlined" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text77" required variant="outlined" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text78" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text79" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text80" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text81" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text82" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text83" required variant="outlined" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text84" required variant="outlined" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text85" required variant="outlined" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text86" required variant="outlined" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text87" required variant="outlined" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text88" required variant="outlined" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text89" required variant="outlined" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- no label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text90" required variant="outlined" value="Value" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text91" required variant="outlined" value="Value" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text92" required variant="outlined" value="Value" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text93" required variant="outlined" value="Value" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text94" required variant="outlined" value="Value" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text95" required variant="outlined" value="Value" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- adjacent Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text96" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text97" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text98" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text99" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text100" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text101" required variant="outlined" value="Value" adjacentLabel label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <br><br>
                        </md-layout-column>
                        <!-- Label value -->
                        <md-layout-column >
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text102" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" supportingText="Supporting Text"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text103" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" characterCounter="10/100"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text104" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" prefix="prefix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text105" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" suffix="suffix"></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text106" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" leadingIcons='["image"]'></md-text-field>
                            </md-layout-column-item>
                            <md-layout-column-item expanded="4" medium="8" compact="4">
                                <md-text-field shape="round" name="text107" required variant="outlined" value="Value" label="Text Field" placeholder="placeholder" trailingIcons='["image"]'></md-text-field>
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

customElements.define("test-text-field-round", TestTextFieldRound);

export default document.createElement("test-text-field-round");
