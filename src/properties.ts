/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    // TODO: We have to migrate it to DataViewObjectsParser. You can find it in powerbi-visuals-utils-dataviewutils
    export const PropertiesOfCapabilities = {
        "dataPoint": {
            "defaultColor": {
                "objectName": "dataPoint",
                "propertyName": "defaultColor"
            },
            "showAllDataPoints": {
                "objectName": "dataPoint",
                "propertyName": "showAllDataPoints"
            },
            "fill": {
                "objectName": "dataPoint",
                "propertyName": "fill"
            },
            "fillRule": {
                "objectName": "dataPoint",
                "propertyName": "fillRule"
            }
        },
        "categoryAxis": {
            "show": {
                "objectName": "categoryAxis",
                "propertyName": "show"
            },
            "axisScale": {
                "objectName": "categoryAxis",
                "propertyName": "axisScale"
            },
            "start": {
                "objectName": "categoryAxis",
                "propertyName": "start"
            },
            "end": {
                "objectName": "categoryAxis",
                "propertyName": "end"
            },
            "showAxisTitle": {
                "objectName": "categoryAxis",
                "propertyName": "showAxisTitle"
            }, "axisStyle": {
                "objectName": "categoryAxis",
                "propertyName": "axisStyle"
            },
            "axisColor": {
                "objectName": "categoryAxis",
                "propertyName": "axisColor"
            },
            "labelDisplayUnits": {
                "objectName": "categoryAxis",
                "propertyName": "labelDisplayUnits"
            }
        },
        "valueAxis": {
            "show": {
                "objectName": "valueAxis",
                "propertyName": "show"
            },
            "position": {
                "objectName": "valueAxis",
                "propertyName": "position"
            },
            "axisScale": {
                "objectName": "valueAxis",
                "propertyName": "axisScale"
            },
            "start": {
                "objectName": "valueAxis",
                "propertyName": "start"
            },
            "end": {
                "objectName": "valueAxis",
                "propertyName": "end"
            },
            "showAxisTitle": {
                "objectName": "valueAxis",
                "propertyName": "showAxisTitle"
            },
            "axisStyle": {
                "objectName": "valueAxis",
                "propertyName": "axisStyle"
            },
            "axisColor": {
                "objectName": "valueAxis",
                "propertyName": "axisColor"
            },
            "labelDisplayUnits": {
                "objectName": "valueAxis",
                "propertyName": "labelDisplayUnits"
            }
        },
        "legend": {
            "show": {
                "objectName": "legend",
                "propertyName": "show"
            },
            "position": {
                "objectName": "legend",
                "propertyName": "position"
            },
            "showTitle": {
                "objectName": "legend",
                "propertyName": "showTitle"
            },
            "titleText": {
                "objectName": "legend",
                "propertyName": "titleText"
            },
            "labelColor": {
                "objectName": "legend",
                "propertyName": "labelColor"
            },
            "fontSize": {
                "objectName": "legend",
                "propertyName": "fontSize"
            }
        },
        "categoryLabels": {
            "show": {
                "objectName": "categoryLabels",
                "propertyName": "show"
            },
            "color": {
                "objectName": "categoryLabels",
                "propertyName": "color"
            },
            "fontSize": {
                "objectName": "categoryLabels",
                "propertyName": "fontSize"
            }
        },
        "zoom":{
            "show":{
                "objectName":"zoom",
                "propertyName":"show"
            }
        },
        "yConstantLine":{
            "show":{
                "objectName":"yConstantLine",
                "propertyName": "show"
            },
            "start":{
                "objectName":"yConstantLine",
                "propertyName": "start"
            }
        },
        "yConstantLine1":{
            "show":{
                "objectName":"yConstantLine1",
                "propertyName": "show"
            },
            "start":{
                "objectName":"yConstantLine1",
                "propertyName": "start"
            }
        },
        "bubbleSize":{
            "show":{
                "objectName":"bubbleSize",
                "propertyName": "show"
            },
            "start":{
                "objectName":"bubbleSize",
                "propertyName": "start"
            }
        },
        "symmetryLine":{
            "show":{
                "objectName":"symmetryLine",
                "propertyName":"show"
            }
        },
        "upperLine":{
            "show":{
                "objectName":"upperLine",
                "propertyName": "show"
            },
            "start":{
                "objectName":"upperLine",
                "propertyName": "start"
            }
        },
        "lowerLine":{
            "show":{
                "objectName":"lowerLine",
                "propertyName": "show"
            },
            "start":{
                "objectName":"lowerLine",
                "propertyName": "start"
            }
        },
        "fillPoint": {
            "show": {
                "objectName": "fillPoint",
                "propertyName": "show"
            }
        },
        
        "backdrop": {
            "show": {
                "objectName": "backdrop",
                "propertyName": "show"
            },
            "url": {
                "objectName": "backdrop",
                "propertyName": "url"
            }
        },
        "crosshair": {
            "show": {
                "objectName": "crosshair",
                "propertyName": "show"
            }
        },
        "outline": {
            "show": {
                "objectName": "outline",
                "propertyName": "show"
            }
        }
    };
}
