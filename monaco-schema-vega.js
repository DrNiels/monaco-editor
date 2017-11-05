(function(PolymerVis) {
  PolymerVis.schemas = PolymerVis.schemas || {};
  PolymerVis.schemas['vega'] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Vega 3.0 Visualization Specification Language",
    "defs": {
      "autosize": {
        "oneOf": [
          {
            "enum": [
              "pad",
              "fit",
              "none"
            ]
          },
          {
            "type": "object",
            "properties": {
              "type": {
                "enum": [
                  "pad",
                  "fit",
                  "none"
                ]
              },
              "resize": {
                "type": "boolean"
              },
              "contains": {
                "enum": [
                  "content",
                  "padding"
                ]
              }
            },
            "required": [
              "type"
            ],
            "additionalProperties": false
          }
        ],
        "default": "pad"
      },
      "axis": {
        "type": "object",
        "properties": {
          "orient": {
            "enum": [
              "top",
              "bottom",
              "left",
              "right"
            ]
          },
          "scale": {
            "type": "string"
          },
          "title": {
            "$ref": "#/refs/stringOrSignal"
          },
          "zindex": {
            "type": "number"
          },
          "ticks": {
            "type": "boolean"
          },
          "labels": {
            "type": "boolean"
          },
          "domain": {
            "type": "boolean"
          },
          "grid": {
            "type": "boolean"
          },
          "gridScale": {
            "type": "string"
          },
          "tickSize": {
            "type": "number"
          },
          "labelPadding": {
            "type": "number"
          },
          "labelFlush": {
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "number"
              }
            ]
          },
          "labelFlushOffset": {
            "type": "number"
          },
          "labelOverlap": {
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "enum": [
                  "parity",
                  "greedy"
                ],
                "type": "string"
              }
            ]
          },
          "labelBound": {
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "number"
              }
            ]
          },
          "tickCount": {
            "$ref": "#/refs/tickCount"
          },
          "format": {
            "$ref": "#/refs/stringOrSignal"
          },
          "values": {
            "oneOf": [
              {
                "type": "array"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "offset": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "position": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "titlePadding": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "minExtent": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "maxExtent": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "encode": {
            "type": "object",
            "properties": {
              "axis": {
                "$ref": "#/defs/guideEncode"
              },
              "ticks": {
                "$ref": "#/defs/guideEncode"
              },
              "labels": {
                "$ref": "#/defs/guideEncode"
              },
              "title": {
                "$ref": "#/defs/guideEncode"
              },
              "grid": {
                "$ref": "#/defs/guideEncode"
              },
              "domain": {
                "$ref": "#/defs/guideEncode"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false,
        "required": [
          "orient",
          "scale"
        ]
      },
      "background": {
        "type": "string"
      },
      "bind": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "input": {
                "enum": [
                  "checkbox"
                ]
              },
              "element": {
                "$ref": "#/refs/element"
              },
              "debounce": {
                "type": "number"
              }
            },
            "required": [
              "input"
            ]
          },
          {
            "type": "object",
            "properties": {
              "input": {
                "enum": [
                  "radio",
                  "select"
                ]
              },
              "element": {
                "$ref": "#/refs/element"
              },
              "options": {
                "type": "array"
              },
              "debounce": {
                "type": "number"
              }
            },
            "additionalProperties": false,
            "required": [
              "input",
              "options"
            ]
          },
          {
            "type": "object",
            "properties": {
              "input": {
                "enum": [
                  "range"
                ]
              },
              "element": {
                "$ref": "#/refs/element"
              },
              "min": {
                "type": "number"
              },
              "max": {
                "type": "number"
              },
              "step": {
                "type": "number"
              },
              "debounce": {
                "type": "number"
              }
            },
            "additionalProperties": false,
            "required": [
              "input"
            ]
          },
          {
            "type": "object",
            "properties": {
              "input": {
                "not": {
                  "enum": [
                    "checkbox",
                    "radio",
                    "range",
                    "select"
                  ]
                }
              },
              "element": {
                "$ref": "#/refs/element"
              },
              "debounce": {
                "type": "number"
              }
            },
            "additionalProperties": true
          }
        ]
      },
      "data": {
        "title": "Input data set definition",
        "type": "object",
        "allOf": [
          {
            "properties": {
              "name": {
                "type": "string"
              },
              "transform": {
                "type": "array",
                "items": {
                  "$ref": "#/defs/transform"
                }
              },
              "on": {
                "$ref": "#/defs/onTrigger"
              },
              "format": {
                "type": "object",
                "anyOf": [
                  {
                    "properties": {
                      "type": {
                        "enum": [
                          "json"
                        ]
                      },
                      "parse": {
                        "oneOf": [
                          {
                            "enum": [
                              "auto"
                            ]
                          },
                          {
                            "type": "object",
                            "additionalProperties": {
                              "oneOf": [
                                {
                                  "enum": [
                                    "boolean",
                                    "number",
                                    "date",
                                    "string"
                                  ]
                                },
                                {
                                  "type": "string",
                                  "pattern": "^(date|utc):.*$"
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "property": {
                        "type": "string"
                      },
                      "copy": {
                        "type": "boolean"
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "properties": {
                      "type": {
                        "enum": [
                          "csv",
                          "tsv"
                        ]
                      },
                      "parse": {
                        "oneOf": [
                          {
                            "enum": [
                              "auto"
                            ]
                          },
                          {
                            "type": "object",
                            "additionalProperties": {
                              "oneOf": [
                                {
                                  "enum": [
                                    "boolean",
                                    "number",
                                    "date",
                                    "string"
                                  ]
                                },
                                {
                                  "type": "string",
                                  "pattern": "^(date|utc):.*$"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "properties": {
                      "type": {
                        "enum": [
                          "dsv"
                        ]
                      },
                      "delimiter": {
                        "type": "string"
                      },
                      "parse": {
                        "oneOf": [
                          {
                            "enum": [
                              "auto"
                            ]
                          },
                          {
                            "type": "object",
                            "additionalProperties": {
                              "oneOf": [
                                {
                                  "enum": [
                                    "boolean",
                                    "number",
                                    "date",
                                    "string"
                                  ]
                                },
                                {
                                  "type": "string",
                                  "pattern": "^(date|utc):.*$"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "oneOf": [
                      {
                        "properties": {
                          "type": {
                            "enum": [
                              "topojson"
                            ]
                          },
                          "feature": {
                            "type": "string"
                          },
                          "property": {
                            "type": "string"
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "properties": {
                          "type": {
                            "enum": [
                              "topojson"
                            ]
                          },
                          "mesh": {
                            "type": "string"
                          },
                          "property": {
                            "type": "string"
                          }
                        },
                        "additionalProperties": false
                      }
                    ]
                  }
                ]
              }
            },
            "required": [
              "name"
            ]
          },
          {
            "anyOf": [
              {
                "required": [
                  "name"
                ]
              },
              {
                "oneOf": [
                  {
                    "properties": {
                      "source": {
                        "oneOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "array",
                            "items": {
                              "type": "string"
                            },
                            "minItems": 1
                          }
                        ]
                      }
                    },
                    "required": [
                      "source"
                    ]
                  },
                  {
                    "properties": {
                      "values": {
                        "type": "array"
                      }
                    },
                    "required": [
                      "values"
                    ]
                  },
                  {
                    "properties": {
                      "url": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "url"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "rule": {
        "type": "object",
        "properties": {
          "test": {
            "type": "string"
          }
        }
      },
      "encodeEntry": {
        "title": "Mark encode property set",
        "type": "object",
        "properties": {
          "x": {
            "$ref": "#/refs/numberValue"
          },
          "x2": {
            "$ref": "#/refs/numberValue"
          },
          "xc": {
            "$ref": "#/refs/numberValue"
          },
          "width": {
            "$ref": "#/refs/numberValue"
          },
          "y": {
            "$ref": "#/refs/numberValue"
          },
          "y2": {
            "$ref": "#/refs/numberValue"
          },
          "yc": {
            "$ref": "#/refs/numberValue"
          },
          "height": {
            "$ref": "#/refs/numberValue"
          },
          "opacity": {
            "$ref": "#/refs/numberValue"
          },
          "fill": {
            "$ref": "#/refs/colorValue"
          },
          "fillOpacity": {
            "$ref": "#/refs/numberValue"
          },
          "stroke": {
            "$ref": "#/refs/colorValue"
          },
          "strokeWidth": {
            "$ref": "#/refs/numberValue"
          },
          "strokeOpacity": {
            "$ref": "#/refs/numberValue"
          },
          "strokeDash": {
            "$ref": "#/refs/arrayValue"
          },
          "strokeDashOffset": {
            "$ref": "#/refs/numberValue"
          },
          "cursor": {
            "$ref": "#/refs/stringValue"
          },
          "clip": {
            "$ref": "#/refs/booleanValue"
          },
          "size": {
            "$ref": "#/refs/numberValue"
          },
          "shape": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/stringValue"
              }
            ]
          },
          "path": {
            "$ref": "#/refs/stringValue"
          },
          "innerRadius": {
            "$ref": "#/refs/numberValue"
          },
          "outerRadius": {
            "$ref": "#/refs/numberValue"
          },
          "startAngle": {
            "$ref": "#/refs/numberValue"
          },
          "endAngle": {
            "$ref": "#/refs/numberValue"
          },
          "interpolate": {
            "$ref": "#/refs/stringValue"
          },
          "tension": {
            "$ref": "#/refs/numberValue"
          },
          "orient": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "allOf": [
                    {
                      "$ref": "#/defs/rule"
                    },
                    {
                      "type": "object",
                      "allOf": [
                        {
                          "$ref": "#/refs/stringModifiers"
                        },
                        {
                          "anyOf": [
                            {
                              "oneOf": [
                                {
                                  "$ref": "#/refs/signal"
                                },
                                {
                                  "properties": {
                                    "value": {
                                      "enum": [
                                        "horizontal",
                                        "vertical"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "value"
                                  ]
                                },
                                {
                                  "properties": {
                                    "field": {
                                      "$ref": "#/refs/field"
                                    }
                                  },
                                  "required": [
                                    "field"
                                  ]
                                },
                                {
                                  "properties": {
                                    "range": {
                                      "type": [
                                        "number",
                                        "boolean"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "range"
                                  ]
                                }
                              ]
                            },
                            {
                              "required": [
                                "scale",
                                "value"
                              ]
                            },
                            {
                              "required": [
                                "scale",
                                "band"
                              ]
                            },
                            {
                              "required": [
                                "offset"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "type": "object",
                "allOf": [
                  {
                    "$ref": "#/refs/stringModifiers"
                  },
                  {
                    "anyOf": [
                      {
                        "oneOf": [
                          {
                            "$ref": "#/refs/signal"
                          },
                          {
                            "properties": {
                              "value": {
                                "enum": [
                                  "horizontal",
                                  "vertical"
                                ]
                              }
                            },
                            "required": [
                              "value"
                            ]
                          },
                          {
                            "properties": {
                              "field": {
                                "$ref": "#/refs/field"
                              }
                            },
                            "required": [
                              "field"
                            ]
                          },
                          {
                            "properties": {
                              "range": {
                                "type": [
                                  "number",
                                  "boolean"
                                ]
                              }
                            },
                            "required": [
                              "range"
                            ]
                          }
                        ]
                      },
                      {
                        "required": [
                          "scale",
                          "value"
                        ]
                      },
                      {
                        "required": [
                          "scale",
                          "band"
                        ]
                      },
                      {
                        "required": [
                          "offset"
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "url": {
            "$ref": "#/refs/stringValue"
          },
          "align": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "allOf": [
                    {
                      "$ref": "#/defs/rule"
                    },
                    {
                      "type": "object",
                      "allOf": [
                        {
                          "$ref": "#/refs/stringModifiers"
                        },
                        {
                          "anyOf": [
                            {
                              "oneOf": [
                                {
                                  "$ref": "#/refs/signal"
                                },
                                {
                                  "properties": {
                                    "value": {
                                      "enum": [
                                        "left",
                                        "right",
                                        "center"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "value"
                                  ]
                                },
                                {
                                  "properties": {
                                    "field": {
                                      "$ref": "#/refs/field"
                                    }
                                  },
                                  "required": [
                                    "field"
                                  ]
                                },
                                {
                                  "properties": {
                                    "range": {
                                      "type": [
                                        "number",
                                        "boolean"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "range"
                                  ]
                                }
                              ]
                            },
                            {
                              "required": [
                                "scale",
                                "value"
                              ]
                            },
                            {
                              "required": [
                                "scale",
                                "band"
                              ]
                            },
                            {
                              "required": [
                                "offset"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "type": "object",
                "allOf": [
                  {
                    "$ref": "#/refs/stringModifiers"
                  },
                  {
                    "anyOf": [
                      {
                        "oneOf": [
                          {
                            "$ref": "#/refs/signal"
                          },
                          {
                            "properties": {
                              "value": {
                                "enum": [
                                  "left",
                                  "right",
                                  "center"
                                ]
                              }
                            },
                            "required": [
                              "value"
                            ]
                          },
                          {
                            "properties": {
                              "field": {
                                "$ref": "#/refs/field"
                              }
                            },
                            "required": [
                              "field"
                            ]
                          },
                          {
                            "properties": {
                              "range": {
                                "type": [
                                  "number",
                                  "boolean"
                                ]
                              }
                            },
                            "required": [
                              "range"
                            ]
                          }
                        ]
                      },
                      {
                        "required": [
                          "scale",
                          "value"
                        ]
                      },
                      {
                        "required": [
                          "scale",
                          "band"
                        ]
                      },
                      {
                        "required": [
                          "offset"
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "baseline": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "allOf": [
                    {
                      "$ref": "#/defs/rule"
                    },
                    {
                      "type": "object",
                      "allOf": [
                        {
                          "$ref": "#/refs/stringModifiers"
                        },
                        {
                          "anyOf": [
                            {
                              "oneOf": [
                                {
                                  "$ref": "#/refs/signal"
                                },
                                {
                                  "properties": {
                                    "value": {
                                      "enum": [
                                        "top",
                                        "middle",
                                        "bottom",
                                        "alphabetic"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "value"
                                  ]
                                },
                                {
                                  "properties": {
                                    "field": {
                                      "$ref": "#/refs/field"
                                    }
                                  },
                                  "required": [
                                    "field"
                                  ]
                                },
                                {
                                  "properties": {
                                    "range": {
                                      "type": [
                                        "number",
                                        "boolean"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "range"
                                  ]
                                }
                              ]
                            },
                            {
                              "required": [
                                "scale",
                                "value"
                              ]
                            },
                            {
                              "required": [
                                "scale",
                                "band"
                              ]
                            },
                            {
                              "required": [
                                "offset"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "type": "object",
                "allOf": [
                  {
                    "$ref": "#/refs/stringModifiers"
                  },
                  {
                    "anyOf": [
                      {
                        "oneOf": [
                          {
                            "$ref": "#/refs/signal"
                          },
                          {
                            "properties": {
                              "value": {
                                "enum": [
                                  "top",
                                  "middle",
                                  "bottom",
                                  "alphabetic"
                                ]
                              }
                            },
                            "required": [
                              "value"
                            ]
                          },
                          {
                            "properties": {
                              "field": {
                                "$ref": "#/refs/field"
                              }
                            },
                            "required": [
                              "field"
                            ]
                          },
                          {
                            "properties": {
                              "range": {
                                "type": [
                                  "number",
                                  "boolean"
                                ]
                              }
                            },
                            "required": [
                              "range"
                            ]
                          }
                        ]
                      },
                      {
                        "required": [
                          "scale",
                          "value"
                        ]
                      },
                      {
                        "required": [
                          "scale",
                          "band"
                        ]
                      },
                      {
                        "required": [
                          "offset"
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "text": {
            "$ref": "#/refs/stringValue"
          },
          "dir": {
            "$ref": "#/refs/stringValue"
          },
          "ellipsis": {
            "$ref": "#/refs/stringValue"
          },
          "limit": {
            "$ref": "#/refs/numberValue"
          },
          "dx": {
            "$ref": "#/refs/numberValue"
          },
          "dy": {
            "$ref": "#/refs/numberValue"
          },
          "radius": {
            "$ref": "#/refs/numberValue"
          },
          "theta": {
            "$ref": "#/refs/numberValue"
          },
          "angle": {
            "$ref": "#/refs/numberValue"
          },
          "font": {
            "$ref": "#/refs/stringValue"
          },
          "fontSize": {
            "$ref": "#/refs/numberValue"
          },
          "fontWeight": {
            "$ref": "#/refs/nullableStringValue"
          },
          "fontStyle": {
            "$ref": "#/refs/stringValue"
          }
        },
        "additionalProperties": true
      },
      "encode": {
        "type": "object",
        "patternProperties": {
          "^.+$": {
            "$ref": "#/defs/encodeEntry"
          }
        },
        "additionalProperties": false
      },
      "layout": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "align": {
                "oneOf": [
                  {
                    "oneOf": [
                      {
                        "enum": [
                          "all",
                          "each",
                          "none"
                        ]
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "row": {
                        "oneOf": [
                          {
                            "enum": [
                              "all",
                              "each",
                              "none"
                            ]
                          },
                          {
                            "$ref": "#/refs/signal"
                          }
                        ]
                      },
                      "column": {
                        "oneOf": [
                          {
                            "enum": [
                              "all",
                              "each",
                              "none"
                            ]
                          },
                          {
                            "$ref": "#/refs/signal"
                          }
                        ]
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              },
              "bounds": {
                "oneOf": [
                  {
                    "enum": [
                      "full",
                      "flush"
                    ]
                  },
                  {
                    "$ref": "#/refs/signal"
                  }
                ]
              },
              "columns": {
                "$ref": "#/refs/numberOrSignal"
              },
              "padding": {
                "oneOf": [
                  {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "row": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "column": {
                        "$ref": "#/refs/numberOrSignal"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              },
              "offset": {
                "oneOf": [
                  {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "rowHeader": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "rowFooter": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "rowTitle": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "columnHeader": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "columnFooter": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "columnTitle": {
                        "$ref": "#/refs/numberOrSignal"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              },
              "headerBand": {
                "oneOf": [
                  {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  {
                    "type": "null"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "row": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "column": {
                        "$ref": "#/refs/numberOrSignal"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              },
              "footerBand": {
                "oneOf": [
                  {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  {
                    "type": "null"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "row": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "column": {
                        "$ref": "#/refs/numberOrSignal"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              },
              "titleBand": {
                "oneOf": [
                  {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  {
                    "type": "null"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "row": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "column": {
                        "$ref": "#/refs/numberOrSignal"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              }
            }
          },
          {
            "$ref": "#/refs/signal"
          }
        ]
      },
      "guideEncode": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "interactive": {
            "type": "boolean",
            "default": false
          },
          "style": {
            "$ref": "#/refs/style"
          }
        },
        "patternProperties": {
          "^(?!interactive|name|style).+$": {
            "$ref": "#/defs/encodeEntry"
          }
        },
        "additionalProperties": false
      },
      "legend": {
        "type": "object",
        "properties": {
          "size": {
            "type": "string"
          },
          "shape": {
            "type": "string"
          },
          "fill": {
            "type": "string"
          },
          "stroke": {
            "type": "string"
          },
          "opacity": {
            "type": "string"
          },
          "strokeDash": {
            "type": "string"
          },
          "type": {
            "enum": [
              "gradient",
              "symbol"
            ],
            "default": "symbol"
          },
          "orient": {
            "enum": [
              "none",
              "left",
              "right",
              "top",
              "bottom",
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right"
            ],
            "default": "right"
          },
          "title": {
            "$ref": "#/refs/stringOrSignal"
          },
          "zindex": {
            "type": "number"
          },
          "offset": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "padding": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "titlePadding": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "entryPadding": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "tickCount": {
            "$ref": "#/refs/tickCount"
          },
          "format": {
            "$ref": "#/refs/stringOrSignal"
          },
          "values": {
            "oneOf": [
              {
                "type": "array"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "encode": {
            "type": "object",
            "properties": {
              "title": {
                "$ref": "#/defs/guideEncode"
              },
              "labels": {
                "$ref": "#/defs/guideEncode"
              },
              "legend": {
                "$ref": "#/defs/guideEncode"
              },
              "symbols": {
                "$ref": "#/defs/guideEncode"
              },
              "gradient": {
                "$ref": "#/defs/guideEncode"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false,
        "anyOf": [
          {
            "required": [
              "size"
            ]
          },
          {
            "required": [
              "shape"
            ]
          },
          {
            "required": [
              "fill"
            ]
          },
          {
            "required": [
              "stroke"
            ]
          },
          {
            "required": [
              "opacity"
            ]
          },
          {
            "required": [
              "strokeDash"
            ]
          }
        ]
      },
      "mark": {
        "type": "object",
        "properties": {
          "type": {
            "$ref": "#/refs/marktype"
          },
          "role": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "style": {
            "$ref": "#/refs/style"
          },
          "key": {
            "type": "string"
          },
          "clip": {
            "type": "boolean"
          },
          "sort": {
            "$ref": "#/refs/compare"
          },
          "interactive": {
            "type": "boolean"
          },
          "encode": {
            "$ref": "#/defs/encode"
          },
          "transform": {
            "type": "array",
            "items": {
              "$ref": "#/defs/transformMark"
            }
          },
          "on": {
            "$ref": "#/defs/onMarkTrigger"
          }
        },
        "required": [
          "type"
        ]
      },
      "markGroup": {
        "allOf": [
          {
            "properties": {
              "type": {
                "enum": [
                  "group"
                ]
              }
            },
            "required": [
              "type"
            ]
          },
          {
            "$ref": "#/defs/mark"
          },
          {
            "$ref": "#/defs/scope"
          },
          {
            "type": "object",
            "properties": {
              "from": {
                "oneOf": [
                  {
                    "$ref": "#/refs/from"
                  },
                  {
                    "$ref": "#/refs/facet"
                  }
                ]
              }
            }
          }
        ]
      },
      "markVisual": {
        "allOf": [
          {
            "not": {
              "properties": {
                "type": {
                  "enum": [
                    "group"
                  ]
                }
              }
            }
          },
          {
            "$ref": "#/defs/mark"
          },
          {
            "type": "object",
            "properties": {
              "from": {
                "$ref": "#/refs/from"
              }
            }
          }
        ]
      },
      "listener": {
        "oneOf": [
          {
            "$ref": "#/refs/signal"
          },
          {
            "type": "object",
            "properties": {
              "scale": {
                "type": "string"
              }
            },
            "required": [
              "scale"
            ]
          },
          {
            "$ref": "#/defs/stream"
          }
        ]
      },
      "onEvents": {
        "type": "array",
        "items": {
          "allOf": [
            {
              "type": "object",
              "properties": {
                "events": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/selector"
                    },
                    {
                      "$ref": "#/defs/listener"
                    },
                    {
                      "type": "array",
                      "minItems": 1,
                      "items": {
                        "$ref": "#/defs/listener"
                      }
                    }
                  ]
                },
                "force": {
                  "type": "boolean"
                }
              },
              "required": [
                "events"
              ]
            },
            {
              "oneOf": [
                {
                  "type": "object",
                  "properties": {
                    "encode": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "encode"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "update": {
                      "oneOf": [
                        {
                          "$ref": "#/refs/exprString"
                        },
                        {
                          "$ref": "#/refs/expr"
                        },
                        {
                          "$ref": "#/refs/signal"
                        },
                        {
                          "type": "object",
                          "properties": {
                            "value": {}
                          },
                          "required": [
                            "value"
                          ]
                        }
                      ]
                    }
                  },
                  "required": [
                    "update"
                  ]
                }
              ]
            }
          ]
        }
      },
      "onTrigger": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "trigger": {
              "$ref": "#/refs/exprString"
            },
            "insert": {
              "$ref": "#/refs/exprString"
            },
            "remove": {
              "oneOf": [
                {
                  "type": "boolean"
                },
                {
                  "$ref": "#/refs/exprString"
                }
              ]
            },
            "toggle": {
              "$ref": "#/refs/exprString"
            },
            "modify": {
              "$ref": "#/refs/exprString"
            },
            "values": {
              "$ref": "#/refs/exprString"
            }
          },
          "required": [
            "trigger"
          ]
        }
      },
      "onMarkTrigger": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "trigger": {
              "$ref": "#/refs/exprString"
            },
            "modify": {
              "$ref": "#/refs/exprString"
            },
            "values": {
              "$ref": "#/refs/exprString"
            }
          },
          "required": [
            "trigger"
          ]
        }
      },
      "padding": {
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "object",
            "properties": {
              "top": {
                "type": "number"
              },
              "bottom": {
                "type": "number"
              },
              "left": {
                "type": "number"
              },
              "right": {
                "type": "number"
              }
            },
            "required": [
              "top",
              "bottom",
              "left",
              "right"
            ],
            "additionalProperties": false
          }
        ]
      },
      "projection": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "type": {
            "$ref": "#/refs/stringOrSignal"
          },
          "clipAngle": {
            "$ref": "#/refs/numberOrSignal"
          },
          "clipExtent": {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "array",
                      "items": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "minItems": 2,
                      "maxItems": 2
                    }
                  ]
                }
              }
            ]
          },
          "scale": {
            "$ref": "#/refs/numberOrSignal"
          },
          "translate": {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/refs/numberOrSignal"
                },
                "minItems": 2,
                "maxItems": 2
              }
            ]
          },
          "center": {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/refs/numberOrSignal"
                },
                "minItems": 2,
                "maxItems": 2
              }
            ]
          },
          "rotate": {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/refs/numberOrSignal"
                },
                "minItems": 2,
                "maxItems": 3
              }
            ]
          },
          "parallels": {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/refs/numberOrSignal"
                },
                "minItems": 2,
                "maxItems": 2
              }
            ]
          },
          "precision": {
            "$ref": "#/refs/numberOrSignal"
          },
          "pointRadius": {
            "$ref": "#/refs/numberOrSignal"
          },
          "fit": {
            "oneOf": [
              {
                "type": "object"
              },
              {
                "type": "array"
              }
            ]
          },
          "extent": {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "array",
                      "items": {
                        "$ref": "#/refs/numberOrSignal"
                      },
                      "minItems": 2,
                      "maxItems": 2
                    }
                  ]
                },
                "minItems": 2,
                "maxItems": 2
              }
            ]
          },
          "size": {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/refs/numberOrSignal"
                },
                "minItems": 2,
                "maxItems": 2
              }
            ]
          }
        },
        "additionalProperties": true,
        "required": [
          "name",
          "type"
        ]
      },
      "scale": {
        "title": "Scale mapping",
        "type": "object",
        "allOf": [
          {
            "properties": {
              "name": {
                "type": "string"
              },
              "type": {
                "type": "string",
                "default": "linear"
              },
              "domain": {
                "oneOf": [
                  {
                    "type": "array",
                    "items": {
                      "oneOf": [
                        {
                          "type": "null"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "number"
                        },
                        {
                          "type": "boolean"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ]
                    }
                  },
                  {
                    "$ref": "#/refs/scaleData"
                  },
                  {
                    "$ref": "#/refs/signal"
                  }
                ]
              },
              "domainMin": {
                "$ref": "#/refs/numberOrSignal"
              },
              "domainMax": {
                "$ref": "#/refs/numberOrSignal"
              },
              "domainMid": {
                "$ref": "#/refs/numberOrSignal"
              },
              "domainRaw": {
                "oneOf": [
                  {
                    "type": "null"
                  },
                  {
                    "type": "array"
                  },
                  {
                    "$ref": "#/refs/signal"
                  }
                ]
              },
              "reverse": {
                "$ref": "#/refs/booleanOrSignal"
              },
              "round": {
                "$ref": "#/refs/booleanOrSignal"
              }
            },
            "required": [
              "name"
            ]
          },
          {
            "oneOf": [
              {
                "properties": {
                  "type": {
                    "enum": [
                      "ordinal"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "$ref": "#/refs/scaleData"
                      }
                    ]
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "band"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "step": {
                            "$ref": "#/refs/numberOrSignal"
                          }
                        },
                        "required": [
                          "step"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "padding": {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  "paddingInner": {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  "paddingOuter": {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  "align": {
                    "$ref": "#/refs/numberOrSignal"
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "point"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "step": {
                            "$ref": "#/refs/numberOrSignal"
                          }
                        },
                        "required": [
                          "step"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "padding": {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  "paddingOuter": {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  "align": {
                    "$ref": "#/refs/numberOrSignal"
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "sequential"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "clamp": {
                    "$ref": "#/refs/booleanOrSignal"
                  }
                },
                "required": [
                  "type",
                  "range"
                ]
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "time",
                      "utc"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "clamp": {
                    "$ref": "#/refs/booleanOrSignal"
                  },
                  "padding": {
                    "type": "number"
                  },
                  "nice": {
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "string",
                        "enum": [
                          "millisecond",
                          "second",
                          "minute",
                          "hour",
                          "day",
                          "week",
                          "month",
                          "year"
                        ]
                      },
                      {
                        "type": "object",
                        "properties": {
                          "interval": {
                            "oneOf": [
                              {
                                "type": "string",
                                "enum": [
                                  "millisecond",
                                  "second",
                                  "minute",
                                  "hour",
                                  "day",
                                  "week",
                                  "month",
                                  "year"
                                ]
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          },
                          "step": {
                            "$ref": "#/refs/numberOrSignal"
                          }
                        },
                        "required": [
                          "interval"
                        ]
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "identity"
                    ]
                  },
                  "nice": {
                    "$ref": "#/refs/booleanOrSignal"
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "description": "Discretizing scales",
                "properties": {
                  "type": {
                    "enum": [
                      "quantile",
                      "quantize",
                      "threshold",
                      "bin-ordinal"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "nice": {
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  "zero": {
                    "$ref": "#/refs/booleanOrSignal"
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "description": "Default numeric scale",
                "not": {
                  "properties": {
                    "type": {
                      "enum": [
                        "ordinal",
                        "band",
                        "point",
                        "quantile",
                        "quantize",
                        "threshold",
                        "sequential",
                        "pow",
                        "log",
                        "time",
                        "utc",
                        "identity",
                        "bin-ordinal",
                        "bin-linear"
                      ]
                    }
                  },
                  "required": [
                    "type"
                  ]
                },
                "properties": {
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "interpolate": {
                    "$ref": "#/refs/scaleInterpolate"
                  },
                  "clamp": {
                    "$ref": "#/refs/booleanOrSignal"
                  },
                  "padding": {
                    "type": "number"
                  },
                  "nice": {
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  "zero": {
                    "$ref": "#/refs/booleanOrSignal"
                  }
                }
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "log"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "interpolate": {
                    "$ref": "#/refs/scaleInterpolate"
                  },
                  "base": {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  "clamp": {
                    "$ref": "#/refs/booleanOrSignal"
                  },
                  "padding": {
                    "type": "number"
                  },
                  "nice": {
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  "zero": {
                    "$ref": "#/refs/booleanOrSignal"
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "pow"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "interpolate": {
                    "$ref": "#/refs/scaleInterpolate"
                  },
                  "clamp": {
                    "$ref": "#/refs/booleanOrSignal"
                  },
                  "exponent": {
                    "$ref": "#/refs/numberOrSignal"
                  },
                  "padding": {
                    "type": "number"
                  },
                  "nice": {
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  "zero": {
                    "$ref": "#/refs/booleanOrSignal"
                  }
                },
                "required": [
                  "type"
                ]
              },
              {
                "properties": {
                  "type": {
                    "enum": [
                      "bin-linear"
                    ]
                  },
                  "range": {
                    "oneOf": [
                      {
                        "enum": [
                          "width",
                          "height",
                          "symbol",
                          "category",
                          "ordinal",
                          "ramp",
                          "diverging",
                          "heatmap"
                        ]
                      },
                      {
                        "type": "array",
                        "items": {
                          "oneOf": [
                            {
                              "type": "null"
                            },
                            {
                              "type": "boolean"
                            },
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "type": "object",
                        "properties": {
                          "scheme": {
                            "$ref": "#/refs/stringOrSignal"
                          },
                          "count": {
                            "$ref": "#/refs/numberOrSignal"
                          },
                          "extent": {
                            "oneOf": [
                              {
                                "type": "array",
                                "items": {
                                  "$ref": "#/refs/numberOrSignal"
                                },
                                "numItems": 2
                              },
                              {
                                "$ref": "#/refs/signal"
                              }
                            ]
                          }
                        },
                        "required": [
                          "scheme"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "interpolate": {
                    "$ref": "#/refs/scaleInterpolate"
                  }
                },
                "required": [
                  "type"
                ]
              }
            ]
          }
        ]
      },
      "scope": {
        "type": "object",
        "properties": {
          "encode": {
            "$ref": "#/defs/encode"
          },
          "layout": {
            "$ref": "#/defs/layout"
          },
          "signals": {
            "type": "array",
            "items": {
              "$ref": "#/defs/signal"
            }
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/defs/data"
            }
          },
          "scales": {
            "type": "array",
            "items": {
              "$ref": "#/defs/scale"
            }
          },
          "projections": {
            "type": "array",
            "items": {
              "$ref": "#/defs/projection"
            }
          },
          "axes": {
            "type": "array",
            "items": {
              "$ref": "#/defs/axis"
            }
          },
          "legends": {
            "type": "array",
            "items": {
              "$ref": "#/defs/legend"
            }
          },
          "title": {
            "$ref": "#/defs/title"
          },
          "marks": {
            "type": "array",
            "items": {
              "oneOf": [
                {
                  "$ref": "#/defs/markGroup"
                },
                {
                  "$ref": "#/defs/markVisual"
                }
              ]
            }
          }
        }
      },
      "signal": {
        "oneOf": [
          {
            "$ref": "#/defs/signalPush"
          },
          {
            "$ref": "#/defs/signalNew"
          }
        ]
      },
      "signalName": {
        "type": "string",
        "not": {
          "enum": [
            "parent",
            "datum",
            "event",
            "item"
          ]
        }
      },
      "signalNew": {
        "type": "object",
        "properties": {
          "name": {
            "$ref": "#/defs/signalName"
          },
          "description": {
            "type": "string"
          },
          "value": {},
          "react": {
            "type": "boolean",
            "default": true
          },
          "update": {
            "$ref": "#/refs/exprString"
          },
          "on": {
            "$ref": "#/defs/onEvents"
          },
          "bind": {
            "$ref": "#/defs/bind"
          }
        },
        "additionalProperties": false,
        "required": [
          "name"
        ]
      },
      "signalPush": {
        "type": "object",
        "properties": {
          "name": {
            "$ref": "#/defs/signalName"
          },
          "push": {
            "enum": [
              "outer"
            ]
          },
          "description": {
            "type": "string"
          },
          "on": {
            "$ref": "#/defs/onEvents"
          }
        },
        "additionalProperties": false,
        "required": [
          "name",
          "push"
        ]
      },
      "streamParams": {
        "properties": {
          "between": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "$ref": "#/defs/stream"
            }
          },
          "marktype": {
            "type": "string"
          },
          "markname": {
            "type": "string"
          },
          "filter": {
            "oneOf": [
              {
                "$ref": "#/refs/exprString"
              },
              {
                "type": "array",
                "minItems": 1,
                "items": {
                  "$ref": "#/refs/exprString"
                }
              }
            ]
          },
          "throttle": {
            "type": "number"
          },
          "debounce": {
            "type": "number"
          },
          "consume": {
            "type": "boolean"
          }
        }
      },
      "streamEvents": {
        "properties": {
          "source": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ]
      },
      "stream": {
        "title": "Input event stream definition",
        "type": "object",
        "allOf": [
          {
            "$ref": "#/defs/streamParams"
          },
          {
            "oneOf": [
              {
                "$ref": "#/defs/streamEvents"
              },
              {
                "type": "object",
                "properties": {
                  "stream": {
                    "$ref": "#/defs/stream"
                  }
                },
                "required": [
                  "stream"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "merge": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "$ref": "#/defs/stream"
                    }
                  }
                },
                "required": [
                  "merge"
                ]
              }
            ]
          }
        ]
      },
      "titleEncode": {
        "type": "object",
        "patternProperties": {
          "^(?!interactive|name|style).+$": {
            "$ref": "#/defs/encodeEntry"
          }
        },
        "additionalProperties": false
      },
      "title": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "orient": {
                "enum": [
                  "none",
                  "left",
                  "right",
                  "top",
                  "bottom"
                ],
                "default": "top"
              },
              "anchor": {
                "enum": [
                  "start",
                  "middle",
                  "end"
                ],
                "default": "middle"
              },
              "style": {
                "$ref": "#/refs/style"
              },
              "text": {
                "$ref": "#/refs/stringOrSignal"
              },
              "zindex": {
                "type": "number"
              },
              "interactive": {
                "type": "boolean"
              },
              "offset": {
                "oneOf": [
                  {
                    "type": "number"
                  },
                  {
                    "$ref": "#/refs/numberValue"
                  }
                ]
              },
              "encode": {
                "$ref": "#/defs/titleEncode"
              }
            },
            "required": [
              "text"
            ],
            "additionalProperties": false
          }
        ]
      },
      "transform": {
        "oneOf": [
          {
            "$ref": "#/defs/aggregateTransform"
          },
          {
            "$ref": "#/defs/binTransform"
          },
          {
            "$ref": "#/defs/collectTransform"
          },
          {
            "$ref": "#/defs/countpatternTransform"
          },
          {
            "$ref": "#/defs/crossTransform"
          },
          {
            "$ref": "#/defs/densityTransform"
          },
          {
            "$ref": "#/defs/extentTransform"
          },
          {
            "$ref": "#/defs/filterTransform"
          },
          {
            "$ref": "#/defs/foldTransform"
          },
          {
            "$ref": "#/defs/formulaTransform"
          },
          {
            "$ref": "#/defs/imputeTransform"
          },
          {
            "$ref": "#/defs/joinaggregateTransform"
          },
          {
            "$ref": "#/defs/lookupTransform"
          },
          {
            "$ref": "#/defs/projectTransform"
          },
          {
            "$ref": "#/defs/sampleTransform"
          },
          {
            "$ref": "#/defs/sequenceTransform"
          },
          {
            "$ref": "#/defs/windowTransform"
          },
          {
            "$ref": "#/defs/identifierTransform"
          },
          {
            "$ref": "#/defs/linkpathTransform"
          },
          {
            "$ref": "#/defs/pieTransform"
          },
          {
            "$ref": "#/defs/stackTransform"
          },
          {
            "$ref": "#/defs/contourTransform"
          },
          {
            "$ref": "#/defs/geojsonTransform"
          },
          {
            "$ref": "#/defs/geopathTransform"
          },
          {
            "$ref": "#/defs/geopointTransform"
          },
          {
            "$ref": "#/defs/geoshapeTransform"
          },
          {
            "$ref": "#/defs/graticuleTransform"
          },
          {
            "$ref": "#/defs/forceTransform"
          },
          {
            "$ref": "#/defs/nestTransform"
          },
          {
            "$ref": "#/defs/packTransform"
          },
          {
            "$ref": "#/defs/partitionTransform"
          },
          {
            "$ref": "#/defs/stratifyTransform"
          },
          {
            "$ref": "#/defs/treeTransform"
          },
          {
            "$ref": "#/defs/treelinksTransform"
          },
          {
            "$ref": "#/defs/treemapTransform"
          },
          {
            "$ref": "#/defs/voronoiTransform"
          },
          {
            "$ref": "#/defs/wordcloudTransform"
          },
          {
            "$ref": "#/defs/crossfilterTransform"
          },
          {
            "$ref": "#/defs/resolvefilterTransform"
          }
        ]
      },
      "transformMark": {
        "oneOf": [
          {
            "$ref": "#/defs/binTransform"
          },
          {
            "$ref": "#/defs/collectTransform"
          },
          {
            "$ref": "#/defs/extentTransform"
          },
          {
            "$ref": "#/defs/formulaTransform"
          },
          {
            "$ref": "#/defs/joinaggregateTransform"
          },
          {
            "$ref": "#/defs/lookupTransform"
          },
          {
            "$ref": "#/defs/windowTransform"
          },
          {
            "$ref": "#/defs/identifierTransform"
          },
          {
            "$ref": "#/defs/linkpathTransform"
          },
          {
            "$ref": "#/defs/pieTransform"
          },
          {
            "$ref": "#/defs/stackTransform"
          },
          {
            "$ref": "#/defs/geojsonTransform"
          },
          {
            "$ref": "#/defs/geopathTransform"
          },
          {
            "$ref": "#/defs/geopointTransform"
          },
          {
            "$ref": "#/defs/geoshapeTransform"
          },
          {
            "$ref": "#/defs/forceTransform"
          },
          {
            "$ref": "#/defs/packTransform"
          },
          {
            "$ref": "#/defs/partitionTransform"
          },
          {
            "$ref": "#/defs/stratifyTransform"
          },
          {
            "$ref": "#/defs/treeTransform"
          },
          {
            "$ref": "#/defs/treemapTransform"
          },
          {
            "$ref": "#/defs/voronoiTransform"
          },
          {
            "$ref": "#/defs/wordcloudTransform"
          },
          {
            "$ref": "#/defs/crossfilterTransform"
          },
          {
            "$ref": "#/defs/resolvefilterTransform"
          }
        ]
      },
      "aggregateTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "aggregate"
            ]
          },
          "signal": {
            "type": "string"
          },
          "groupby": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "ops": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "enum": [
                        "values",
                        "count",
                        "missing",
                        "valid",
                        "sum",
                        "mean",
                        "average",
                        "variance",
                        "variancep",
                        "stdev",
                        "stdevp",
                        "stderr",
                        "distinct",
                        "ci0",
                        "ci1",
                        "median",
                        "q1",
                        "q3",
                        "argmin",
                        "argmax",
                        "min",
                        "max"
                      ]
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "drop": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": true
          },
          "cross": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "key": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "binTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "bin"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "anchor": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "maxbins": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 20
          },
          "base": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 10
          },
          "divide": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": [
              5,
              2
            ]
          },
          "extent": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "step": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "steps": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "minstep": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "nice": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": true
          },
          "name": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              "bin0",
              "bin1"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "field",
          "extent"
        ]
      },
      "collectTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "collect"
            ]
          },
          "signal": {
            "type": "string"
          },
          "sort": {
            "$ref": "#/refs/compare"
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "countpatternTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "countpattern"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "case": {
            "anyOf": [
              {
                "enum": [
                  "upper",
                  "lower",
                  "mixed"
                ]
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "mixed"
          },
          "pattern": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "[\\w\"]+"
          },
          "stopwords": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              "text",
              "count"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "field"
        ]
      },
      "crossTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "cross"
            ]
          },
          "signal": {
            "type": "string"
          },
          "filter": {
            "$ref": "#/refs/exprString"
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              "a",
              "b"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "densityTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "density"
            ]
          },
          "signal": {
            "type": "string"
          },
          "extent": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "steps": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 100
          },
          "method": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "pdf"
          },
          "distribution": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "function": {
                    "enum": [
                      "normal"
                    ]
                  },
                  "mean": {
                    "anyOf": [
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  "stdev": {
                    "anyOf": [
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ],
                    "default": 1
                  }
                },
                "additionalProperties": false,
                "required": [
                  "function"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "function": {
                    "enum": [
                      "uniform"
                    ]
                  },
                  "min": {
                    "anyOf": [
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  "max": {
                    "anyOf": [
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ],
                    "default": 1
                  }
                },
                "additionalProperties": false,
                "required": [
                  "function"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "function": {
                    "enum": [
                      "kde"
                    ]
                  },
                  "field": {
                    "oneOf": [
                      {
                        "$ref": "#/refs/scaleField"
                      },
                      {
                        "$ref": "#/refs/paramField"
                      },
                      {
                        "$ref": "#/refs/expr"
                      }
                    ]
                  },
                  "from": {
                    "type": "string"
                  },
                  "bandwidth": {
                    "anyOf": [
                      {
                        "type": "number"
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  }
                },
                "additionalProperties": false,
                "required": [
                  "function",
                  "field"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "function": {
                    "enum": [
                      "mixture"
                    ]
                  },
                  "distributions": {
                    "oneOf": [
                      {
                        "type": "array",
                        "items": {}
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  },
                  "weights": {
                    "oneOf": [
                      {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "number"
                            },
                            {
                              "$ref": "#/refs/signal"
                            }
                          ]
                        }
                      },
                      {
                        "$ref": "#/refs/signal"
                      }
                    ]
                  }
                },
                "additionalProperties": false,
                "required": [
                  "function"
                ]
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": [
              "value",
              "density"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "extentTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "extent"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "field"
        ]
      },
      "filterTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "filter"
            ]
          },
          "signal": {
            "type": "string"
          },
          "expr": {
            "$ref": "#/refs/exprString"
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "expr"
        ]
      },
      "foldTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "fold"
            ]
          },
          "signal": {
            "type": "string"
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              "key",
              "value"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "fields"
        ]
      },
      "formulaTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "formula"
            ]
          },
          "signal": {
            "type": "string"
          },
          "expr": {
            "$ref": "#/refs/exprString"
          },
          "as": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "initonly": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "expr",
          "as"
        ]
      },
      "imputeTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "impute"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "key": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "keyvals": {
            "oneOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "groupby": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "method": {
            "anyOf": [
              {
                "enum": [
                  "value",
                  "mean",
                  "median",
                  "max",
                  "min"
                ]
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "value"
          },
          "value": {}
        },
        "additionalProperties": false,
        "required": [
          "type",
          "field",
          "key"
        ]
      },
      "joinaggregateTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "joinaggregate"
            ]
          },
          "signal": {
            "type": "string"
          },
          "groupby": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "ops": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "enum": [
                        "values",
                        "count",
                        "missing",
                        "valid",
                        "sum",
                        "mean",
                        "average",
                        "variance",
                        "variancep",
                        "stdev",
                        "stdevp",
                        "stderr",
                        "distinct",
                        "ci0",
                        "ci1",
                        "median",
                        "q1",
                        "q3",
                        "argmin",
                        "argmax",
                        "min",
                        "max"
                      ]
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "key": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "lookupTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "lookup"
            ]
          },
          "signal": {
            "type": "string"
          },
          "from": {
            "type": "string"
          },
          "key": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "values": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "default": {}
        },
        "additionalProperties": false,
        "required": [
          "type",
          "from",
          "key",
          "fields"
        ]
      },
      "projectTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "project"
            ]
          },
          "signal": {
            "type": "string"
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "sampleTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "sample"
            ]
          },
          "signal": {
            "type": "string"
          },
          "size": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 1000
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "sequenceTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "sequence"
            ]
          },
          "signal": {
            "type": "string"
          },
          "start": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "stop": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "step": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 1
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "start",
          "stop"
        ]
      },
      "windowTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "window"
            ]
          },
          "signal": {
            "type": "string"
          },
          "sort": {
            "$ref": "#/refs/compare"
          },
          "groupby": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "ops": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "enum": [
                        "row_number",
                        "rank",
                        "dense_rank",
                        "percent_rank",
                        "cume_dist",
                        "ntile",
                        "lag",
                        "lead",
                        "first_value",
                        "last_value",
                        "nth_value",
                        "values",
                        "count",
                        "missing",
                        "valid",
                        "sum",
                        "mean",
                        "average",
                        "variance",
                        "variancep",
                        "stdev",
                        "stdevp",
                        "stderr",
                        "distinct",
                        "ci0",
                        "ci1",
                        "median",
                        "q1",
                        "q3",
                        "argmin",
                        "argmax",
                        "min",
                        "max"
                      ]
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "params": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "frame": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              null,
              0
            ]
          },
          "ignorePeers": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "identifierTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "identifier"
            ]
          },
          "signal": {
            "type": "string"
          },
          "as": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "as"
        ]
      },
      "linkpathTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "linkpath"
            ]
          },
          "signal": {
            "type": "string"
          },
          "sourceX": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ],
            "default": "source.x"
          },
          "sourceY": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ],
            "default": "source.y"
          },
          "targetX": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ],
            "default": "target.x"
          },
          "targetY": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ],
            "default": "target.y"
          },
          "orient": {
            "anyOf": [
              {
                "enum": [
                  "horizontal",
                  "vertical",
                  "radial"
                ]
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "vertical"
          },
          "shape": {
            "anyOf": [
              {
                "enum": [
                  "line",
                  "arc",
                  "curve",
                  "diagonal",
                  "orthogonal"
                ]
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "line"
          },
          "as": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "path"
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "pieTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "pie"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "startAngle": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "endAngle": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 6.283185307179586
          },
          "sort": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              "startAngle",
              "endAngle"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "stackTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "stack"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "groupby": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "sort": {
            "$ref": "#/refs/compare"
          },
          "offset": {
            "anyOf": [
              {
                "enum": [
                  "zero",
                  "center",
                  "normalize"
                ]
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "zero"
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              "y0",
              "y1"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "contourTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "contour"
            ]
          },
          "signal": {
            "type": "string"
          },
          "size": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "values": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "x": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "y": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "cellSize": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "bandwidth": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "count": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "nice": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "thresholds": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "size"
        ]
      },
      "geojsonTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "geojson"
            ]
          },
          "signal": {
            "type": "string"
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "geojson": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "geopathTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "geopath"
            ]
          },
          "signal": {
            "type": "string"
          },
          "projection": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "as": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "path"
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "geopointTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "geopoint"
            ]
          },
          "signal": {
            "type": "string"
          },
          "projection": {
            "type": "string"
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              "x",
              "y"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "projection",
          "fields"
        ]
      },
      "geoshapeTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "geoshape"
            ]
          },
          "signal": {
            "type": "string"
          },
          "projection": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ],
            "default": "datum"
          },
          "as": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "shape"
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "graticuleTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "graticule"
            ]
          },
          "signal": {
            "type": "string"
          },
          "extent": {
            "oneOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "extentMajor": {
            "oneOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "extentMinor": {
            "oneOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "step": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "stepMajor": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              90,
              360
            ]
          },
          "stepMinor": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              10,
              10
            ]
          },
          "precision": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 2.5
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "forceTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "force"
            ]
          },
          "signal": {
            "type": "string"
          },
          "static": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "restart": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "iterations": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 300
          },
          "alpha": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 1
          },
          "alphaMin": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 0.001
          },
          "alphaTarget": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "velocityDecay": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 0.4
          },
          "forces": {
            "type": "array",
            "items": {
              "oneOf": [
                {
                  "type": "object",
                  "properties": {
                    "force": {
                      "enum": [
                        "center"
                      ]
                    },
                    "x": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ]
                    },
                    "y": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "force"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "force": {
                      "enum": [
                        "collide"
                      ]
                    },
                    "radius": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        },
                        {
                          "$ref": "#/refs/expr"
                        },
                        {
                          "$ref": "#/refs/paramField"
                        }
                      ]
                    },
                    "strength": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": 0.7
                    },
                    "iterations": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": 1
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "force"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "force": {
                      "enum": [
                        "nbody"
                      ]
                    },
                    "strength": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": -30
                    },
                    "theta": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": 0.9
                    },
                    "distanceMin": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": 1
                    },
                    "distanceMax": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "force"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "force": {
                      "enum": [
                        "link"
                      ]
                    },
                    "links": {
                      "type": "string"
                    },
                    "id": {
                      "oneOf": [
                        {
                          "$ref": "#/refs/scaleField"
                        },
                        {
                          "$ref": "#/refs/paramField"
                        },
                        {
                          "$ref": "#/refs/expr"
                        }
                      ]
                    },
                    "distance": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        },
                        {
                          "$ref": "#/refs/expr"
                        },
                        {
                          "$ref": "#/refs/paramField"
                        }
                      ],
                      "default": 30
                    },
                    "strength": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        },
                        {
                          "$ref": "#/refs/expr"
                        },
                        {
                          "$ref": "#/refs/paramField"
                        }
                      ]
                    },
                    "iterations": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": 1
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "force"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "force": {
                      "enum": [
                        "x"
                      ]
                    },
                    "strength": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": 0.1
                    },
                    "x": {
                      "oneOf": [
                        {
                          "$ref": "#/refs/scaleField"
                        },
                        {
                          "$ref": "#/refs/paramField"
                        },
                        {
                          "$ref": "#/refs/expr"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "force"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "force": {
                      "enum": [
                        "y"
                      ]
                    },
                    "strength": {
                      "anyOf": [
                        {
                          "type": "number"
                        },
                        {
                          "$ref": "#/refs/signal"
                        }
                      ],
                      "default": 0.1
                    },
                    "y": {
                      "oneOf": [
                        {
                          "$ref": "#/refs/scaleField"
                        },
                        {
                          "$ref": "#/refs/paramField"
                        },
                        {
                          "$ref": "#/refs/expr"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "force"
                  ]
                }
              ]
            }
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": [
              "x",
              "y",
              "vx",
              "vy"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "nestTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "nest"
            ]
          },
          "signal": {
            "type": "string"
          },
          "keys": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "key": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "generate": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "packTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "pack"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "sort": {
            "$ref": "#/refs/compare"
          },
          "padding": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "radius": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "size": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 3,
            "minItems": 3,
            "default": [
              "x",
              "y",
              "r",
              "depth",
              "children"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "partitionTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "partition"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "sort": {
            "$ref": "#/refs/compare"
          },
          "padding": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "round": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "size": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 4,
            "minItems": 4,
            "default": [
              "x0",
              "y0",
              "x1",
              "y1",
              "depth",
              "children"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "stratifyTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "stratify"
            ]
          },
          "signal": {
            "type": "string"
          },
          "key": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "parentKey": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "key",
          "parentKey"
        ]
      },
      "treeTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "tree"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "sort": {
            "$ref": "#/refs/compare"
          },
          "method": {
            "anyOf": [
              {
                "enum": [
                  "tidy",
                  "cluster"
                ]
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "tidy"
          },
          "size": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "nodeSize": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 4,
            "minItems": 4,
            "default": [
              "x",
              "y",
              "depth",
              "children"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "treelinksTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "treelinks"
            ]
          },
          "signal": {
            "type": "string"
          },
          "key": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "treemapTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "treemap"
            ]
          },
          "signal": {
            "type": "string"
          },
          "field": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "sort": {
            "$ref": "#/refs/compare"
          },
          "method": {
            "anyOf": [
              {
                "enum": [
                  "squarify",
                  "resquarify",
                  "binary",
                  "dice",
                  "slice",
                  "slicedice"
                ]
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "squarify"
          },
          "padding": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "paddingInner": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "paddingOuter": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "paddingTop": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "paddingRight": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "paddingBottom": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "paddingLeft": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "ratio": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": 1.618033988749895
          },
          "round": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "size": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 4,
            "minItems": 4,
            "default": [
              "x0",
              "y0",
              "x1",
              "y1",
              "depth",
              "children"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "voronoiTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "voronoi"
            ]
          },
          "signal": {
            "type": "string"
          },
          "x": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "y": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "size": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "extent": {
            "oneOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2,
            "default": [
              [
                -100000,
                -100000
              ],
              [
                100000,
                100000
              ]
            ]
          },
          "as": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "default": "path"
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "x",
          "y"
        ]
      },
      "wordcloudTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "wordcloud"
            ]
          },
          "signal": {
            "type": "string"
          },
          "size": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 2,
            "minItems": 2
          },
          "font": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              },
              {
                "$ref": "#/refs/expr"
              },
              {
                "$ref": "#/refs/paramField"
              }
            ],
            "default": "sans-serif"
          },
          "fontStyle": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              },
              {
                "$ref": "#/refs/expr"
              },
              {
                "$ref": "#/refs/paramField"
              }
            ],
            "default": "normal"
          },
          "fontWeight": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              },
              {
                "$ref": "#/refs/expr"
              },
              {
                "$ref": "#/refs/paramField"
              }
            ],
            "default": "normal"
          },
          "fontSize": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              },
              {
                "$ref": "#/refs/expr"
              },
              {
                "$ref": "#/refs/paramField"
              }
            ],
            "default": 14
          },
          "fontSizeRange": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "number"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "null"
              }
            ],
            "default": [
              10,
              50
            ]
          },
          "rotate": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              },
              {
                "$ref": "#/refs/expr"
              },
              {
                "$ref": "#/refs/paramField"
              }
            ]
          },
          "text": {
            "oneOf": [
              {
                "$ref": "#/refs/scaleField"
              },
              {
                "$ref": "#/refs/paramField"
              },
              {
                "$ref": "#/refs/expr"
              }
            ]
          },
          "spiral": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "padding": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              },
              {
                "$ref": "#/refs/expr"
              },
              {
                "$ref": "#/refs/paramField"
              }
            ]
          },
          "as": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ],
            "maxItems": 7,
            "minItems": 7,
            "default": [
              "x",
              "y",
              "font",
              "fontSize",
              "fontStyle",
              "fontWeight",
              "angle"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      },
      "crossfilterTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "crossfilter"
            ]
          },
          "signal": {
            "type": "string"
          },
          "fields": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/refs/scaleField"
                    },
                    {
                      "$ref": "#/refs/paramField"
                    },
                    {
                      "$ref": "#/refs/expr"
                    }
                  ]
                }
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "query": {
            "oneOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "type",
          "fields",
          "query"
        ]
      },
      "resolvefilterTransform": {
        "type": "object",
        "properties": {
          "type": {
            "enum": [
              "resolvefilter"
            ]
          },
          "signal": {
            "type": "string"
          },
          "ignore": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/signal"
              }
            ]
          },
          "filter": {}
        },
        "additionalProperties": false,
        "required": [
          "type",
          "ignore",
          "filter"
        ]
      }
    },
    "refs": {
      "tickCount": {
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "string",
            "enum": [
              "millisecond",
              "second",
              "minute",
              "hour",
              "day",
              "week",
              "month",
              "year"
            ]
          },
          {
            "type": "object",
            "properties": {
              "interval": {
                "oneOf": [
                  {
                    "type": "string",
                    "enum": [
                      "millisecond",
                      "second",
                      "minute",
                      "hour",
                      "day",
                      "week",
                      "month",
                      "year"
                    ]
                  },
                  {
                    "$ref": "#/refs/signal"
                  }
                ]
              },
              "step": {
                "$ref": "#/refs/numberOrSignal"
              }
            },
            "required": [
              "interval"
            ]
          },
          {
            "$ref": "#/refs/signal"
          }
        ]
      },
      "element": {
        "type": "string"
      },
      "paramField": {
        "type": "object",
        "properties": {
          "field": {
            "type": "string"
          }
        },
        "additionalProperties": false,
        "required": [
          "field"
        ]
      },
      "field": {
        "title": "FieldRef",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "oneOf": [
              {
                "$ref": "#/refs/signal"
              },
              {
                "type": "object",
                "properties": {
                  "datum": {
                    "$ref": "#/refs/field"
                  }
                },
                "required": [
                  "datum"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "group": {
                    "$ref": "#/refs/field"
                  },
                  "level": {
                    "type": "number"
                  }
                },
                "required": [
                  "group"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "parent": {
                    "$ref": "#/refs/field"
                  },
                  "level": {
                    "type": "number"
                  }
                },
                "required": [
                  "parent"
                ],
                "additionalProperties": false
              }
            ]
          }
        ]
      },
      "scale": {
        "$ref": "#/refs/field"
      },
      "stringModifiers": {
        "properties": {
          "scale": {
            "$ref": "#/refs/scale"
          }
        }
      },
      "numberModifiers": {
        "properties": {
          "exponent": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "mult": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "offset": {
            "oneOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/refs/numberValue"
              }
            ]
          },
          "round": {
            "type": "boolean",
            "default": false
          },
          "scale": {
            "$ref": "#/refs/scale"
          },
          "band": {
            "type": [
              "number",
              "boolean"
            ]
          },
          "extra": {
            "type": "boolean"
          }
        }
      },
      "value": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/defs/rule"
                },
                {
                  "type": "object",
                  "allOf": [
                    {
                      "$ref": "#/refs/stringModifiers"
                    },
                    {
                      "anyOf": [
                        {
                          "oneOf": [
                            {
                              "$ref": "#/refs/signal"
                            },
                            {
                              "properties": {
                                "value": {
                                  "oneOf": [
                                    {
                                      "type": {}
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "value"
                              ]
                            },
                            {
                              "properties": {
                                "field": {
                                  "$ref": "#/refs/field"
                                }
                              },
                              "required": [
                                "field"
                              ]
                            },
                            {
                              "properties": {
                                "range": {
                                  "type": [
                                    "number",
                                    "boolean"
                                  ]
                                }
                              },
                              "required": [
                                "range"
                              ]
                            }
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "value"
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "band"
                          ]
                        },
                        {
                          "required": [
                            "offset"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "object",
            "allOf": [
              {
                "$ref": "#/refs/stringModifiers"
              },
              {
                "anyOf": [
                  {
                    "oneOf": [
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "properties": {
                          "value": {
                            "oneOf": [
                              {
                                "type": {}
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "required": [
                          "value"
                        ]
                      },
                      {
                        "properties": {
                          "field": {
                            "$ref": "#/refs/field"
                          }
                        },
                        "required": [
                          "field"
                        ]
                      },
                      {
                        "properties": {
                          "range": {
                            "type": [
                              "number",
                              "boolean"
                            ]
                          }
                        },
                        "required": [
                          "range"
                        ]
                      }
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "value"
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "band"
                    ]
                  },
                  {
                    "required": [
                      "offset"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "numberValue": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/defs/rule"
                },
                {
                  "type": "object",
                  "allOf": [
                    {
                      "$ref": "#/refs/numberModifiers"
                    },
                    {
                      "anyOf": [
                        {
                          "oneOf": [
                            {
                              "$ref": "#/refs/signal"
                            },
                            {
                              "properties": {
                                "value": {
                                  "type": "number"
                                }
                              },
                              "required": [
                                "value"
                              ]
                            },
                            {
                              "properties": {
                                "field": {
                                  "$ref": "#/refs/field"
                                }
                              },
                              "required": [
                                "field"
                              ]
                            },
                            {
                              "properties": {
                                "range": {
                                  "type": [
                                    "number",
                                    "boolean"
                                  ]
                                }
                              },
                              "required": [
                                "range"
                              ]
                            }
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "value"
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "band"
                          ]
                        },
                        {
                          "required": [
                            "offset"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "object",
            "allOf": [
              {
                "$ref": "#/refs/numberModifiers"
              },
              {
                "anyOf": [
                  {
                    "oneOf": [
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "properties": {
                          "value": {
                            "type": "number"
                          }
                        },
                        "required": [
                          "value"
                        ]
                      },
                      {
                        "properties": {
                          "field": {
                            "$ref": "#/refs/field"
                          }
                        },
                        "required": [
                          "field"
                        ]
                      },
                      {
                        "properties": {
                          "range": {
                            "type": [
                              "number",
                              "boolean"
                            ]
                          }
                        },
                        "required": [
                          "range"
                        ]
                      }
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "value"
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "band"
                    ]
                  },
                  {
                    "required": [
                      "offset"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "stringValue": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/defs/rule"
                },
                {
                  "type": "object",
                  "allOf": [
                    {
                      "$ref": "#/refs/stringModifiers"
                    },
                    {
                      "anyOf": [
                        {
                          "oneOf": [
                            {
                              "$ref": "#/refs/signal"
                            },
                            {
                              "properties": {
                                "value": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "value"
                              ]
                            },
                            {
                              "properties": {
                                "field": {
                                  "$ref": "#/refs/field"
                                }
                              },
                              "required": [
                                "field"
                              ]
                            },
                            {
                              "properties": {
                                "range": {
                                  "type": [
                                    "number",
                                    "boolean"
                                  ]
                                }
                              },
                              "required": [
                                "range"
                              ]
                            }
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "value"
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "band"
                          ]
                        },
                        {
                          "required": [
                            "offset"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "object",
            "allOf": [
              {
                "$ref": "#/refs/stringModifiers"
              },
              {
                "anyOf": [
                  {
                    "oneOf": [
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "properties": {
                          "value": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "value"
                        ]
                      },
                      {
                        "properties": {
                          "field": {
                            "$ref": "#/refs/field"
                          }
                        },
                        "required": [
                          "field"
                        ]
                      },
                      {
                        "properties": {
                          "range": {
                            "type": [
                              "number",
                              "boolean"
                            ]
                          }
                        },
                        "required": [
                          "range"
                        ]
                      }
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "value"
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "band"
                    ]
                  },
                  {
                    "required": [
                      "offset"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "booleanValue": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/defs/rule"
                },
                {
                  "type": "object",
                  "allOf": [
                    {
                      "$ref": "#/refs/stringModifiers"
                    },
                    {
                      "anyOf": [
                        {
                          "oneOf": [
                            {
                              "$ref": "#/refs/signal"
                            },
                            {
                              "properties": {
                                "value": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "value"
                              ]
                            },
                            {
                              "properties": {
                                "field": {
                                  "$ref": "#/refs/field"
                                }
                              },
                              "required": [
                                "field"
                              ]
                            },
                            {
                              "properties": {
                                "range": {
                                  "type": [
                                    "number",
                                    "boolean"
                                  ]
                                }
                              },
                              "required": [
                                "range"
                              ]
                            }
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "value"
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "band"
                          ]
                        },
                        {
                          "required": [
                            "offset"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "object",
            "allOf": [
              {
                "$ref": "#/refs/stringModifiers"
              },
              {
                "anyOf": [
                  {
                    "oneOf": [
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "properties": {
                          "value": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "value"
                        ]
                      },
                      {
                        "properties": {
                          "field": {
                            "$ref": "#/refs/field"
                          }
                        },
                        "required": [
                          "field"
                        ]
                      },
                      {
                        "properties": {
                          "range": {
                            "type": [
                              "number",
                              "boolean"
                            ]
                          }
                        },
                        "required": [
                          "range"
                        ]
                      }
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "value"
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "band"
                    ]
                  },
                  {
                    "required": [
                      "offset"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "arrayValue": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/defs/rule"
                },
                {
                  "type": "object",
                  "allOf": [
                    {
                      "$ref": "#/refs/stringModifiers"
                    },
                    {
                      "anyOf": [
                        {
                          "oneOf": [
                            {
                              "$ref": "#/refs/signal"
                            },
                            {
                              "properties": {
                                "value": {
                                  "type": "array"
                                }
                              },
                              "required": [
                                "value"
                              ]
                            },
                            {
                              "properties": {
                                "field": {
                                  "$ref": "#/refs/field"
                                }
                              },
                              "required": [
                                "field"
                              ]
                            },
                            {
                              "properties": {
                                "range": {
                                  "type": [
                                    "number",
                                    "boolean"
                                  ]
                                }
                              },
                              "required": [
                                "range"
                              ]
                            }
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "value"
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "band"
                          ]
                        },
                        {
                          "required": [
                            "offset"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "object",
            "allOf": [
              {
                "$ref": "#/refs/stringModifiers"
              },
              {
                "anyOf": [
                  {
                    "oneOf": [
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "properties": {
                          "value": {
                            "type": "array"
                          }
                        },
                        "required": [
                          "value"
                        ]
                      },
                      {
                        "properties": {
                          "field": {
                            "$ref": "#/refs/field"
                          }
                        },
                        "required": [
                          "field"
                        ]
                      },
                      {
                        "properties": {
                          "range": {
                            "type": [
                              "number",
                              "boolean"
                            ]
                          }
                        },
                        "required": [
                          "range"
                        ]
                      }
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "value"
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "band"
                    ]
                  },
                  {
                    "required": [
                      "offset"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "nullableStringValue": {
        "oneOf": [
          {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/defs/rule"
                },
                {
                  "type": "object",
                  "allOf": [
                    {
                      "$ref": "#/refs/stringModifiers"
                    },
                    {
                      "anyOf": [
                        {
                          "oneOf": [
                            {
                              "$ref": "#/refs/signal"
                            },
                            {
                              "properties": {
                                "value": {
                                  "oneOf": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "value"
                              ]
                            },
                            {
                              "properties": {
                                "field": {
                                  "$ref": "#/refs/field"
                                }
                              },
                              "required": [
                                "field"
                              ]
                            },
                            {
                              "properties": {
                                "range": {
                                  "type": [
                                    "number",
                                    "boolean"
                                  ]
                                }
                              },
                              "required": [
                                "range"
                              ]
                            }
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "value"
                          ]
                        },
                        {
                          "required": [
                            "scale",
                            "band"
                          ]
                        },
                        {
                          "required": [
                            "offset"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "object",
            "allOf": [
              {
                "$ref": "#/refs/stringModifiers"
              },
              {
                "anyOf": [
                  {
                    "oneOf": [
                      {
                        "$ref": "#/refs/signal"
                      },
                      {
                        "properties": {
                          "value": {
                            "oneOf": [
                              {
                                "type": "string"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "required": [
                          "value"
                        ]
                      },
                      {
                        "properties": {
                          "field": {
                            "$ref": "#/refs/field"
                          }
                        },
                        "required": [
                          "field"
                        ]
                      },
                      {
                        "properties": {
                          "range": {
                            "type": [
                              "number",
                              "boolean"
                            ]
                          }
                        },
                        "required": [
                          "range"
                        ]
                      }
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "value"
                    ]
                  },
                  {
                    "required": [
                      "scale",
                      "band"
                    ]
                  },
                  {
                    "required": [
                      "offset"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "colorRGB": {
        "type": "object",
        "properties": {
          "r": {
            "$ref": "#/refs/numberValue"
          },
          "g": {
            "$ref": "#/refs/numberValue"
          },
          "b": {
            "$ref": "#/refs/numberValue"
          }
        },
        "required": [
          "r",
          "g",
          "b"
        ]
      },
      "colorHSL": {
        "type": "object",
        "properties": {
          "h": {
            "$ref": "#/refs/numberValue"
          },
          "s": {
            "$ref": "#/refs/numberValue"
          },
          "l": {
            "$ref": "#/refs/numberValue"
          }
        },
        "required": [
          "h",
          "s",
          "l"
        ]
      },
      "colorLAB": {
        "type": "object",
        "properties": {
          "l": {
            "$ref": "#/refs/numberValue"
          },
          "a": {
            "$ref": "#/refs/numberValue"
          },
          "b": {
            "$ref": "#/refs/numberValue"
          }
        },
        "required": [
          "l",
          "a",
          "b"
        ]
      },
      "colorHCL": {
        "type": "object",
        "properties": {
          "h": {
            "$ref": "#/refs/numberValue"
          },
          "c": {
            "$ref": "#/refs/numberValue"
          },
          "l": {
            "$ref": "#/refs/numberValue"
          }
        },
        "required": [
          "h",
          "c",
          "l"
        ]
      },
      "colorValue": {
        "title": "ColorRef",
        "oneOf": [
          {
            "$ref": "#/refs/nullableStringValue"
          },
          {
            "type": "object",
            "properties": {
              "gradient": {
                "$ref": "#/refs/scale"
              }
            },
            "additionalProperties": false,
            "required": [
              "gradient"
            ]
          },
          {
            "type": "object",
            "properties": {
              "color": {
                "oneOf": [
                  {
                    "$ref": "#/refs/colorRGB"
                  },
                  {
                    "$ref": "#/refs/colorHSL"
                  },
                  {
                    "$ref": "#/refs/colorLAB"
                  },
                  {
                    "$ref": "#/refs/colorHCL"
                  }
                ]
              }
            },
            "additionalProperties": false,
            "required": [
              "color"
            ]
          }
        ]
      },
      "expr": {
        "title": "ExpressionRef",
        "type": "object",
        "properties": {
          "expr": {
            "type": "string"
          }
        },
        "required": [
          "expr"
        ]
      },
      "exprString": {
        "title": "Expression String",
        "type": "string"
      },
      "compare": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "field": {
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "$ref": "#/refs/signal"
                  }
                ]
              },
              "order": {
                "$ref": "#/refs/sortOrder"
              }
            }
          },
          {
            "type": "object",
            "properties": {
              "field": {
                "type": "array",
                "items": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                }
              },
              "order": {
                "type": "array",
                "items": {
                  "$ref": "#/refs/sortOrder"
                }
              }
            }
          }
        ]
      },
      "from": {
        "type": "object",
        "properties": {
          "data": {
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "facet": {
        "type": "object",
        "properties": {
          "data": {
            "type": "string"
          },
          "facet": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "string"
                  },
                  "field": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "name",
                  "data",
                  "field"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "data": {
                    "type": "string"
                  },
                  "groupby": {
                    "oneOf": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      }
                    ]
                  },
                  "aggregate": {
                    "type": "object",
                    "properties": {
                      "cross": {
                        "type": "boolean"
                      },
                      "fields": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "ops": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "as": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                "additionalProperties": false,
                "required": [
                  "name",
                  "data",
                  "groupby"
                ]
              }
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "facet"
        ]
      },
      "style": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        ]
      },
      "marktype": {
        "title": "Mark Type definition",
        "type": "string"
      },
      "sortOrder": {
        "oneOf": [
          {
            "enum": [
              "ascending",
              "descending"
            ]
          },
          {
            "$ref": "#/refs/signal"
          }
        ]
      },
      "scaleField": {
        "$ref": "#/refs/stringOrSignal"
      },
      "scaleInterpolate": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "$ref": "#/refs/signal"
          },
          {
            "type": "object",
            "properties": {
              "type": {
                "$ref": "#/refs/stringOrSignal"
              },
              "gamma": {
                "$ref": "#/refs/numberOrSignal"
              }
            },
            "required": [
              "type"
            ]
          }
        ]
      },
      "scaleData": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "data": {
                "type": "string"
              },
              "field": {
                "$ref": "#/refs/scaleField"
              },
              "sort": {
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "field": {
                        "$ref": "#/refs/scaleField"
                      },
                      "op": {
                        "$ref": "#/refs/scaleField"
                      },
                      "order": {
                        "$ref": "#/refs/sortOrder"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              }
            },
            "required": [
              "data",
              "field"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "data": {
                "type": "string"
              },
              "fields": {
                "type": "array",
                "items": {
                  "$ref": "#/refs/scaleField"
                },
                "minItems": 1
              },
              "sort": {
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "op": {
                        "enum": [
                          "count"
                        ]
                      },
                      "order": {
                        "$ref": "#/refs/sortOrder"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              }
            },
            "required": [
              "data",
              "fields"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "fields": {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "string"
                        },
                        "field": {
                          "$ref": "#/refs/scaleField"
                        }
                      },
                      "required": [
                        "data",
                        "field"
                      ],
                      "additionalProperties": false
                    },
                    {
                      "type": "array",
                      "items": {
                        "oneOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "number"
                          },
                          {
                            "type": "boolean"
                          }
                        ]
                      }
                    },
                    {
                      "$ref": "#/refs/signal"
                    }
                  ]
                },
                "minItems": 1
              },
              "sort": {
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "op": {
                        "enum": [
                          "count"
                        ]
                      },
                      "order": {
                        "$ref": "#/refs/sortOrder"
                      }
                    },
                    "additionalProperties": false
                  }
                ]
              }
            },
            "required": [
              "fields"
            ],
            "additionalProperties": false
          }
        ]
      },
      "selector": {
        "title": "Event Selector String",
        "type": "string"
      },
      "signal": {
        "title": "SignalRef",
        "type": "object",
        "properties": {
          "signal": {
            "type": "string"
          }
        },
        "required": [
          "signal"
        ]
      },
      "booleanOrSignal": {
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "$ref": "#/refs/signal"
          }
        ]
      },
      "numberOrSignal": {
        "oneOf": [
          {
            "type": "number"
          },
          {
            "$ref": "#/refs/signal"
          }
        ]
      },
      "stringOrSignal": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "$ref": "#/refs/signal"
          }
        ]
      }
    },
    "type": "object",
    "allOf": [
      {
        "$ref": "#/defs/scope"
      },
      {
        "properties": {
          "$schema": {
            "type": "string",
            "format": "uri"
          },
          "config": {
            "type": "object"
          },
          "description": {
            "type": "string"
          },
          "width": {
            "type": "number"
          },
          "height": {
            "type": "number"
          },
          "padding": {
            "$ref": "#/defs/padding"
          },
          "autosize": {
            "$ref": "#/defs/autosize"
          },
          "background": {
            "$ref": "#/defs/background"
          }
        }
      }
    ]
  };
})(window.PolymerVis = window.PolymerVis || {});
