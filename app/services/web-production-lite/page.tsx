'use client'; // アコーディオンなどクライアントサイドのインタラクションが必要になる可能性があるため

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Check, X, Star, ChevronDown } from 'lucide-react'; // アイコン追加
import Link from 'next/link';